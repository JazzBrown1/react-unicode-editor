import { jsx } from 'react/jsx-runtime';
import { Component, createRef } from 'react';

class UndoStack {
    constructor(initialState = '') {
        this.stack = new Array(30).fill(null);
        this.stack[0] = initialState;
        this.offset = 0;
        this.current = 0;
    }
    clear(initialState) {
        this.stack.fill(null);
        this.stack[0] = initialState;
        this.offset = 0;
        this.current = 0;
    }
    replace(state) {
        this.stack[this.current] = state;
    }
    add(state) {
        if (this.offset === this.current) {
            this.offset = (this.offset + 1) % 30;
            this.current = (this.current + 1) % 30;
            this.stack[this.current] = state;
        }
        else {
            let index = (this.current + 1) % 30;
            const stopAt = (this.offset + 1) % 30;
            while (index !== stopAt) {
                this.stack[index] = null;
                index = (index + 1) % 30;
            }
            this.current = (this.current + 1) % 30;
            this.offset = this.current;
            this.stack[this.current] = state;
        }
    }
    allowedForward() {
        return this.offset !== this.current;
    }
    forward() {
        if (this.offset === this.current)
            return false;
        this.current = (this.current + 1) % 30;
        return this.stack[this.current];
    }
    allowedBack() {
        const backOne = (this.current + 29) % 30;
        return !(backOne === this.offset || this.stack[backOne] === null);
    }
    back() {
        const backOne = (this.current + 29) % 30;
        if (backOne === this.offset || this.stack[backOne] === null)
            return false;
        this.current = backOne;
        return this.stack[this.current];
    }
    getState() {
        return this.stack[this.current];
    }
}

const insertNodeAtIndex = (div, el, index) => {
    if (div.childNodes[index]) {
        div.insertBefore(el, div.childNodes[index]);
    }
    else
        div.appendChild(el);
};

// Sets the caret focus within the text area div (called after variable added)
const setNewFocus = (TextAreaElement, index) => {
    const selection = window.getSelection();
    if (!TextAreaElement)
        return;
    if (!selection)
        return;
    TextAreaElement.focus();
    selection.setPosition(TextAreaElement, index);
};

const addElement = (textAreaElement, selection, newElement) => {
    if (!selection)
        return;
    const anchor = selection.anchorNode;
    if (!anchor)
        return;
    if (anchor.nodeType === 1) {
        // If node type is element add at that position
        insertNodeAtIndex(anchor, newElement, selection.anchorOffset);
        setNewFocus(anchor, selection.anchorOffset + 1);
    }
    else if (anchor.nodeType === 3) {
        const textParent = anchor.parentNode;
        const index = [...textParent.childNodes].indexOf(anchor);
        if (selection.anchorOffset === 0) {
            // insert before text
            insertNodeAtIndex(textParent, newElement, index);
        }
        else if (selection.anchorOffset === anchor.nodeValue.length) {
            // insert after text
            insertNodeAtIndex(textParent, newElement, index + 1);
            setNewFocus(textParent, index + 2);
        }
        else {
            // split text and insert in middle
            const str = anchor.nodeValue || '';
            const text1 = str.substring(0, selection.anchorOffset);
            const text2 = str.substring(selection.anchorOffset);
            // Check this
            // eslint-disable-next-line no-param-reassign
            anchor.nodeValue = text1;
            const text2El = document.createTextNode(text2);
            insertNodeAtIndex(textParent, newElement, index + 1);
            insertNodeAtIndex(textParent, text2El, index + 2);
            setNewFocus(textParent, index + 2);
        }
        // If node type is text split the text and insert element between
    }
};

const defaultVariableStyles = {
    lineHeight: 1,
    display: 'inline-block',
    userSelect: 'all',
    backgroundColor: '#d8d8d8',
    borderRadius: '5px',
    padding: '4px 0',
};
// I have decided that while the developer can input the styles in a css props object
// it would not be performant to parse an object for every variable on every state change
// These are stored in sthe state as strings and only parsed when needed (insert, refresh or paste)
const createVariableElement = (ops, variableStyle) => {
    let stylesObject;
    let stylesString;
    if (typeof ops.style === 'string') {
        stylesObject = ops.style ? JSON.parse(ops.style) : {};
        stylesString = ops.style;
    }
    else if (typeof ops.style === 'object') {
        stylesObject = ops.style;
        stylesString = JSON.stringify(ops.style);
    }
    else {
        stylesObject = {};
        stylesString = '';
    }
    const newElement = document.createElement('span');
    newElement.innerText = ` ${ops.inputText} `;
    Object.assign(newElement.style, defaultVariableStyles, variableStyle, stylesObject);
    newElement.className = `react-unicode-editor-var ${ops.className || ''}`;
    newElement.contentEditable = 'false';
    newElement.draggable = false;
    // These are added as data ats on the el so they can copy and paste
    newElement.setAttribute('data-label', ops.inputText);
    newElement.setAttribute('data-code', ops.code);
    newElement.setAttribute('data-preview', ops.previewText);
    newElement.setAttribute('data-classes', ops.className || '');
    newElement.setAttribute('data-format', ops.format || 'normal');
    newElement.setAttribute('data-styles', stylesString);
    return newElement;
};

// Adds a variable element to the text area
const addVariableElement = (textAreaElement, options, variableStyle) => {
    const newElement = createVariableElement(options, variableStyle);
    const selection = window.getSelection();
    if (selection && selection.type === 'Range') {
        // eslint-disable-next-line no-console
        console.log('Range is not supported yet');
        return;
    }
    addElement(textAreaElement, selection, newElement);
};

const applyStateToTextArea1 = (state, textArea, variableStyle) => {
    // future implementation
    // const p = document.createElement('div');
    // textArea.appendChild(p)
    let row = textArea;
    state.forEach((el, i) => {
        if (typeof el === 'string') {
            if (el === '\n') {
                const newElement = document.createElement('div');
                textArea.appendChild(newElement);
                row = newElement;
                if (!state[i + 1] || state[i + 1] === '\n')
                    newElement.innerHTML = '<br>';
                return;
            }
            const str = new Text(el);
            row.appendChild(str);
        }
        else {
            const span = createVariableElement(el, variableStyle);
            row.appendChild(span);
        }
    });
};

/* eslint-disable no-restricted-syntax */
const unicodeSplit = (str) => {
    const arr = [];
    for (const c of str) {
        arr.push(c);
    }
    return arr;
};
const formats = {
    normal: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
    bold: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟎',
    italic: '𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍1234567890',
    boldItalic: '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟎',
    sans: '𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹1234567890',
    sansBold: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟎',
    sansItalic: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡1234567890',
    sansBoldItalic: '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟎',
    script: '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵1234567890',
    scriptBold: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟎',
    fraktur: '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ1234567890',
    frakturBold: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟎',
    monospace: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉1234567890',
    doublestruck: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ1234567890',
    circled: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ1234567890',
    inverseCircled: 'abcdefghijklmnopqrstuvwxyz🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩1234567890',
    squared: 'abcdefghijklmnopqrstuvwxyz🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉1234567890',
};
const formatArrays = {};
Object.keys(formats).forEach((key) => {
    formatArrays[key] = unicodeSplit(formats[key]);
});
const mapToNormal = {};
const mapToFormat = {};
const alph = unicodeSplit(formats.normal);
Object.values(formatArrays).forEach((alphabet) => {
    alphabet.forEach((l, i) => {
        mapToNormal[l] = alph[i];
    });
});
Object.entries(formatArrays).forEach(([key, alphabet]) => {
    mapToFormat[key] = {};
    alphabet.forEach((l, i) => {
        mapToFormat[key][alph[i]] = l;
    });
});
const format = (text, font) => {
    if (!font || !mapToFormat[font])
        throw new Error('Unknown font');
    if (typeof text !== 'string')
        throw new Error('Text arg must be a string');
    const charMap = mapToFormat[font];
    return unicodeSplit(text).map((c) => charMap[mapToNormal[c]] || c).join('');
};

function determineIfHTMLorText(toBeDetermined) {
    if (toBeDetermined.outerHTML) {
        return true;
    }
    return false;
}
const isDiv = (node) => {
    if (determineIfHTMLorText(node)) {
        return node.outerHTML.startsWith('<div>');
    }
    return false;
};
// The browsers can add deeply nested divs and spans during pastes and drags etc
// This function has to recurse to any depth and deal with a range of scenarios
const flattenTree = (arr, parent) => {
    const nodes = Array.from(parent.childNodes);
    nodes.forEach((node, i) => {
        if (determineIfHTMLorText(node)) {
            if (node.nodeType === 1 && !node.getAttribute('data-code')) {
                // Only subsequent divs are linebreaks
                if (i !== 0 && node.outerHTML.startsWith('<div>'))
                    arr.push('\n');
                if ((node.previousSibling || node.nextSibling) && node.outerHTML.startsWith('<br>'))
                    arr.push('\n');
                flattenTree(arr, node);
            }
            else if (node.nodeType === 1) {
                const isVariable = node.getAttribute('data-code');
                // must use node.innerText on span for Edge compatibility
                const anyNode = node;
                // The below line is added due to a chrome bug that breaks
                // the wysiwyg this atleast keeps the output consitent with the textarea display
                if (anyNode.previousSibling && isDiv(anyNode.previousSibling))
                    arr.push('\n');
                if (isVariable) {
                    arr.push({
                        code: node.getAttribute('data-code') || '',
                        inputText: node.getAttribute('data-label') || '',
                        previewText: node.getAttribute('data-preview') || '',
                        format: node.getAttribute('data-format') || '',
                        className: node.getAttribute('data-classes') || '',
                        style: node.getAttribute('data-styles') || '',
                    });
                }
            }
        }
        else
            arr.push(node.data);
    });
};
const makeState = (TextAreaElement) => {
    if (!TextAreaElement)
        return [];
    const arr = [];
    flattenTree(arr, TextAreaElement);
    return arr;
};

/* eslint-disable no-param-reassign */
const formatTextNode = (node, format$1, from, to) => {
    const localFrom = from < to ? from : to;
    const localTo = from < to ? to : from;
    const str1 = node.data.substring(0, localFrom);
    const str2 = node.data.substring(localFrom, localTo);
    const str3 = node.data.substring(localTo, node.data.length);
    node.data = str1 + format(str2, format$1) + str3;
};
const formatSelectionWrapper = (_parent, selection, format$1) => {
    var _a, _b;
    let formatting = false;
    if (!selection || !selection.anchorNode || !selection.focusNode)
        return;
    const range = {
        anchorOffset: selection.anchorOffset,
        anchorNode: selection.anchorNode,
        focusNode: selection.focusNode,
        focusOffset: selection.focusOffset,
    };
    console.log(Object.assign({}, range));
    const formatSelectionRecurse = (parent) => {
        const nodes = Array.from(parent.childNodes);
        const parentIsAnchor = parent === selection.anchorNode;
        const parentIsFocus = parent === selection.focusNode;
        nodes.forEach((node, index) => {
            if (determineIfHTMLorText(node)) {
                if (node.nodeType === 1 && !node.getAttribute('data-code')) {
                    // If HTML el but not variable span recurseif (
                    if ((parentIsAnchor && selection.anchorOffset === index)
                        || (parentIsFocus && selection.focusOffset === index)) {
                        formatting = !formatting;
                    }
                    formatSelectionRecurse(node);
                }
                else if (node.nodeType === 1) {
                    // if variable span do some checks and format if required
                    const isAnchor = (node === selection.anchorNode || (parentIsAnchor && selection.anchorOffset === index));
                    const isFocus = (node === selection.focusNode || (parentIsFocus && selection.focusOffset === index));
                    if (isAnchor && isFocus)
                        node.setAttribute('data-format', format$1);
                    else if (isAnchor || isFocus) {
                        node.setAttribute('data-format', format$1);
                        formatting = !formatting;
                    }
                    else if (formatting) {
                        node.setAttribute('data-format', format$1);
                    }
                }
            }
            else {
                // Else if text node format accordignly - Loooooaddds of scenarios urggh;
                // eslint-disable-next-line no-lonely-if
                if ((parentIsAnchor && selection.anchorOffset === index)
                    || (parentIsFocus && selection.focusOffset === index)) {
                    if (!formatting)
                        node.data = format(node.data, format$1);
                    formatting = !formatting;
                }
                else if (node === selection.anchorNode && node === selection.focusNode) {
                    const from = Math.min(selection.anchorOffset, selection.focusOffset);
                    const to = Math.max(selection.anchorOffset, selection.focusOffset);
                    const charsFromEnd = node.data.length - to;
                    formatTextNode(node, format$1, from, to);
                    range.anchorOffset = node.data.length - charsFromEnd;
                    range.focusOffset = from;
                }
                else if (node === selection.anchorNode) {
                    if (formatting) {
                        const charsFromEnd = node.data.length - selection.anchorOffset;
                        formatTextNode(node, format$1, 0, selection.anchorOffset);
                        range.anchorOffset = node.data.length - charsFromEnd;
                        console.log({
                            oldOffset: selection.anchorOffset, newOffset: node.data.length - charsFromEnd,
                        });
                    }
                    else {
                        formatTextNode(node, format$1, selection.anchorOffset, node.data.length);
                    }
                    formatting = !formatting;
                }
                else if (node === selection.focusNode) {
                    if (formatting) {
                        const oldOffset = selection.focusOffset;
                        const charsFromEnd = node.data.length - selection.focusOffset;
                        formatTextNode(node, format$1, 0, selection.focusOffset);
                        range.focusOffset = node.data.length - charsFromEnd;
                        console.log({
                            oldOffset, newOffset: node.data.length - charsFromEnd,
                        });
                    }
                    if (formatting)
                        formatTextNode(node, format$1, 0, selection.focusOffset);
                    else
                        formatTextNode(node, format$1, selection.focusOffset, node.data.length);
                    formatting = !formatting;
                }
                else if (formatting) {
                    node.data = format(node.data, format$1);
                }
            }
        });
        if ((parentIsFocus && parent.childNodes.length === selection.focusOffset)
            || (parentIsAnchor && parent.childNodes.length === selection.anchorOffset)) {
            formatting = !formatting;
        }
    };
    formatSelectionRecurse(_parent);
    const newRange = new Range();
    const direction = range.anchorNode.compareDocumentPosition(range.focusNode);
    if (direction === 4) {
        newRange.setStart(range.anchorNode, range.anchorOffset);
        newRange.setEnd(range.focusNode, range.focusOffset);
    }
    else if (direction === 2) {
        newRange.setEnd(range.anchorNode, range.anchorOffset);
        newRange.setStart(range.focusNode, range.focusOffset);
    }
    else if (range.anchorOffset < range.focusOffset) {
        newRange.setStart(range.anchorNode, range.anchorOffset);
        newRange.setEnd(range.focusNode, range.focusOffset);
    }
    else {
        newRange.setEnd(range.anchorNode, range.anchorOffset);
        newRange.setStart(range.focusNode, range.focusOffset);
    }
    console.log(range);
    (_a = document.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
    (_b = document.getSelection()) === null || _b === void 0 ? void 0 : _b.addRange(newRange);
};
const formatSelection = (TextAreaElement, format) => {
    const selection = window.getSelection();
    if (!selection || !selection.anchorNode || !selection.focusNode)
        return;
    formatSelectionWrapper(TextAreaElement, selection, format);
};

const addText = (ta, text) => {
    const selection = window.getSelection();
    if (selection && selection.type === 'Range') {
        // Range is not supported
        return;
    }
    const newElement = new Text(text);
    addElement(ta, selection, newElement);
};

const handlePaste = () => {
    navigator.permissions.query({ name: 'clipboard-read' }).then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
            const nav = navigator;
            nav.clipboard.read().then((data) => {
                data[0].getType('text/html')
                    .then((blob) => blob.text())
                    .then((text) => {
                    // reduceHTML(text);
                    document.execCommand('insertHTML', false, text);
                });
            });
        }
    });
};

const defaults = {
    lineHeight: 1.8,
    border: '1px solid black',
    borderRadius: 5,
    minHeight: 40,
    padding: 15,
    display: 'block',
    whiteSpace: 'pre-wrap',
    width: '100%',
};
class ReactUnicodeEditor extends Component {
    constructor(props) {
        super(props);
        this.debouncing = false;
        this.shouldUpdate = false;
        this.debounceTimer = null;
        this.shouldAddHistory = false;
        this.pasteHandler = () => {
            setTimeout(() => {
                if (!this.editorRef.current)
                    return;
                const state = makeState(this.editorRef.current);
                this.editorRef.current.innerHTML = '';
                applyStateToTextArea1(state, this.editorRef.current, this.props.variableStyle);
                this.history.add(this.editorRef.current.innerHTML);
                this.shouldAddHistory = true;
                this.updateState(state);
            }, 0);
        };
        this.inputHandler = (e) => {
            if (!this.editorRef.current)
                return true;
            switch (e.inputType) {
                case 'historyUndo':
                    if (this.history.back() === false)
                        return false;
                    this.editorRef.current.innerHTML = this.history.getState();
                    this.shouldAddHistory = true;
                    this.updateState();
                    return false;
                case 'historyRedo':
                    if (this.history.forward() === false)
                        return false;
                    this.editorRef.current.innerHTML = this.history.getState();
                    this.shouldAddHistory = true;
                    this.updateState();
                    return false;
                case 'insertText':
                    if (this.shouldAddHistory || e.data === null || e.data === ' ' || this.editorRef.current.innerHTML.length === 1)
                        this.history.add(this.editorRef.current.innerHTML);
                    else
                        this.history.replace(this.editorRef.current.innerHTML);
                    this.shouldAddHistory = false;
                    this.updateState();
                    break;
                case 'insertParagraph':
                    this.shouldAddHistory = true;
                    this.history.add(this.editorRef.current.innerHTML);
                    this.updateState();
                    break;
                case 'insertFromPaste':
                    break;
                case '':
                    this.pasteHandler();
                    break;
                default:
                    this.history.add(this.editorRef.current.innerHTML);
                    this.shouldAddHistory = true;
                    this.updateState();
            }
            return true;
        };
        this.keydownHandler = (e) => {
            if (e.keyCode === 90 && e.ctrlKey) {
                e.preventDefault();
                if (!this.editorRef.current || this.history.back() === false)
                    return;
                this.shouldAddHistory = true;
                this.editorRef.current.innerHTML = this.history.getState();
                this.updateState();
            }
            if (e.keyCode === 89 && e.ctrlKey) {
                e.preventDefault();
                if (!this.editorRef.current || this.history.forward() === false)
                    return;
                this.shouldAddHistory = true;
                this.editorRef.current.innerHTML = this.history.getState();
                this.updateState();
            }
        };
        this.updateState = (state) => {
            if (this.props.debounce)
                this.debounce();
            else
                this.props.onChange(state || makeState(this.editorRef.current));
        };
        this.debounce = () => {
            if (this.debouncing) {
                this.shouldUpdate = true;
            }
            else {
                this.props.onChange(makeState(this.editorRef.current));
                this.debouncing = true;
                this.debounceTimer = window.setTimeout(() => {
                    if (this.shouldUpdate) {
                        this.props.onChange(makeState(this.editorRef.current));
                        this.shouldUpdate = false;
                    }
                    this.debouncing = false;
                    this.debounceTimer = null;
                }, this.props.debounceInterval);
            }
        };
        this.canUndo = () => this.history.allowedBack();
        this.undo = () => {
            if (!this.editorRef.current || this.props.disabled)
                return;
            const html = this.history.back();
            if (html !== false)
                this.editorRef.current.innerHTML = html;
            this.shouldAddHistory = true;
            this.updateState();
        };
        this.paste = () => {
            if (!this.editorRef.current || this.props.disabled)
                return;
            this.shouldAddHistory = true;
            handlePaste();
        };
        this.canRedo = () => this.history.allowedForward();
        this.redo = () => {
            if (!this.editorRef.current || this.props.disabled)
                return;
            const html = this.history.forward();
            if (html)
                this.editorRef.current.innerHTML = html;
            this.shouldAddHistory = true;
            this.updateState();
        };
        this.format = (format) => {
            if (!this.editorRef.current || this.props.disabled)
                return;
            if (!this.isFocused())
                return;
            formatSelection(this.editorRef.current, format);
            this.history.add(this.editorRef.current.innerHTML);
            this.shouldAddHistory = true;
            this.updateState();
        };
        this.refresh = () => {
            if (!this.editorRef.current)
                return;
            this.editorRef.current.innerHTML = '';
            applyStateToTextArea1(this.props.startValue || [], this.editorRef.current, this.props.variableStyle);
        };
        this.addVariable = (options) => {
            if (!this.editorRef.current || this.props.disabled)
                return;
            if (!this.isFocused())
                return;
            addVariableElement(this.editorRef.current, options, this.props.variableStyle);
            this.history.add(this.editorRef.current.innerHTML);
            this.shouldAddHistory = true;
            this.updateState();
        };
        this.addText = (text) => {
            if (!this.editorRef.current || this.props.disabled)
                return;
            if (!this.isFocused())
                return;
            addText(this.editorRef.current, text);
            this.shouldAddHistory = true;
            this.history.add(this.editorRef.current.innerHTML);
            this.updateState();
        };
        this.onDrop = (e) => {
            if (this.props.disableDrag)
                e.preventDefault();
            else
                this.pasteHandler();
        };
        this.onContextMenu = (e) => {
            if (this.props.disableContextMenu)
                e.preventDefault();
            if (this.props.onContextMenu)
                this.props.onContextMenu(e);
        };
        this.props = props;
        this.editorRef = createRef();
        this.history = props.undoStackReference
            && props.undoStackReference.current
            ? props.undoStackReference.current
            : new UndoStack('');
        document.execCommand('defaultParagraphSeparator', false, 'div');
    }
    componentDidMount() {
        if (!this.editorRef.current)
            return;
        applyStateToTextArea1(this.props.startValue || [], this.editorRef.current, this.props.variableStyle);
        this.history.replace(this.editorRef.current.innerHTML);
        this.editorRef.current.addEventListener('paste', this.pasteHandler, false);
        this.editorRef.current.addEventListener('input', this.inputHandler, false);
        this.editorRef.current.addEventListener('keydown', this.keydownHandler, false);
    }
    componentWillUnmount() {
        if (!this.editorRef.current)
            return;
        this.editorRef.current.removeEventListener('paste', this.pasteHandler, false);
        this.editorRef.current.removeEventListener('input', this.inputHandler, false);
        this.editorRef.current.removeEventListener('keydown', this.keydownHandler, false);
        // Remove timer and update immediately if debouncing
        if (this.debounceTimer !== null) {
            window.clearTimeout(this.debounceTimer);
            if (this.shouldUpdate)
                this.props.onChange(makeState(this.editorRef.current));
        }
    }
    isFocused() {
        const selection = document.getSelection();
        if (!selection)
            return false;
        if (document.activeElement === this.editorRef.current)
            return true;
        return Boolean(this.editorRef.current
            && this.editorRef.current.contains(selection === null || selection === void 0 ? void 0 : selection.anchorNode));
    }
    render() {
        return (jsx("div", { className: `react-unicode-editor ${this.props.className || ''}`, contentEditable: !this.props.disabled, role: "textbox", "aria-label": "textarea", onContextMenu: this.onContextMenu, onDrop: this.onDrop, tabIndex: 0, style: Object.assign(Object.assign({}, defaults), this.props.style), ref: this.editorRef }, void 0));
    }
}
// eslint-disable-next-line react/static-property-placement
ReactUnicodeEditor.defaultProps = {
    style: {},
    disabled: false,
    className: '',
    debounce: true,
    debounceInterval: 200,
    startValue: [],
    disableContextMenu: false,
    onContextMenu: null,
    undoStackReference: undefined,
    variableStyle: undefined,
    disableDrag: true,
};

export { UndoStack, ReactUnicodeEditor as default, format as formatText };
