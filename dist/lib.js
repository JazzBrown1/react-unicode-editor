import { jsx } from 'react/jsx-runtime';
import { Component, createRef } from 'react';

const insertNodeAtEnd = (div, el) => {
    div.appendChild(el);
    // div.appendChild(document.createTextNode(''));
};
const insertNodeAtIndex = (div, el, index) => {
    console.log('inai called');
    if (div.childNodes[index]) {
        div.insertBefore(el, div.childNodes[index]);
    }
    else
        insertNodeAtEnd(div, el);
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
    display: 'inline-block',
    userSelect: 'all',
    backgroundColor: '#d8d8d8',
    borderRadius: '5px',
    padding: '2px 0',
};
const createVariableElement = (ops) => {
    const newElement = document.createElement('span');
    newElement.innerText = ' ' + ops.inputText + ' ';
    Object.assign(newElement.style, defaultVariableStyles);
    newElement.className = 'JazzsTest';
    newElement.contentEditable = 'false';
    newElement.setAttribute('data-label', ops.inputText);
    newElement.setAttribute('data-code', ops.code);
    newElement.setAttribute('data-preview', ops.previewText);
    return newElement;
};

// Adds a variable element to the text area
const addVariableElement = (textAreaElement, options) => {
    const newElement = createVariableElement(options);
    const selection = window.getSelection();
    if (selection && selection.type === 'Range') {
        // eslint-disable-next-line no-console
        console.log('Range is not supported yet');
        return;
    }
    addElement(textAreaElement, selection, newElement);
};

const applyStateToTextArea1 = (state, textArea) => {
    //future implementation
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
            const span = createVariableElement(el);
            row.appendChild(span);
        }
    });
};

/* eslint-disable no-restricted-syntax */
const unicodeSplit = (str) => {
  const arr = [];
  for (const c of str) { arr.push(c); }
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
  if (!font || !mapToFormat[font]) throw new Error('Unknown font');
  if (typeof text !== 'string') throw new Error('Text arg must be a string');
  const charMap = mapToFormat[font];
  return unicodeSplit(text).map((c) => charMap[mapToNormal[c]] || c).join('');
};

/* eslint-disable no-continue */
const selectAndReplace = (node, text) => {
    const range = document.createRange();
    const selection = document.getSelection();
    if (!node.parentNode || !selection)
        return;
    const index = [...node.parentNode.childNodes].indexOf(node);
    range.setStart(node.parentNode, index);
    range.setEnd(node.parentNode, index + 1);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('insertText', false, text);
};
const getChildren = (node, arr = []) => {
    Array.from(node.childNodes).forEach((child) => {
        arr.push(child);
        const att = child.getAttribute && child.getAttribute('data-code');
        if (!att)
            getChildren(child, arr);
    });
    return arr;
};
const formatChildren = (format$1, node, from, to = undefined) => {
    if (!node.childNodes || node.childNodes.length === 0) {
        return;
    }
    const acTo = to || node.childNodes.length;
    // eslint-disable-next-line no-plusplus
    for (let i = from; i < acTo; i++) {
        const child = node.childNodes[i];
        if (child.nodeType === 3) {
            // eslint-disable-next-line no-param-reassign
            selectAndReplace(child, format(child.data, format$1));
        }
        else if (child.nodeType === 1 && child.getAttribute('data-code'))
            continue;
        else
            formatChildren(format$1, child, 0);
    }
};
const formatSelection = (TextAreaElement, format$1) => {
    const selection = window.getSelection();
    if (!selection || !selection.anchorNode || !selection.focusNode)
        return;
    const allChildren = getChildren(TextAreaElement, [TextAreaElement]);
    let from = allChildren.indexOf(selection.anchorNode);
    let to = allChildren.indexOf(selection.focusNode);
    let fromOffset;
    let toOffset;
    if (from > to) {
        const too = to;
        to = from;
        from = too;
        fromOffset = selection.focusOffset;
        toOffset = selection.anchorOffset;
    }
    else {
        fromOffset = selection.anchorOffset;
        toOffset = selection.focusOffset;
    }
    const fromNode = allChildren[from];
    const toNode = allChildren[to];
    if (!fromNode || !toNode)
        return;
    if (fromNode === toNode) {
        if (fromNode.nodeType === 3) {
            const text = format(fromNode.data.substring(fromOffset, toOffset), format$1);
            document.execCommand('insertText', false, text);
        }
        else {
            formatChildren(fromNode, fromOffset, toOffset);
        }
        return;
    }
    if (fromNode.nodeType === 3) {
        const str = fromNode.data;
        const text1 = str.substring(0, fromOffset);
        const text2 = format(str.substring(fromOffset), format$1);
        selectAndReplace(fromNode, text1 + text2);
    }
    else
        formatChildren(format$1, fromNode, fromOffset);
    // eslint-disable-next-line no-plusplus
    for (let i = from + 1; i < to; i++) {
        const node = allChildren[i];
        if (node.nodeType === 3)
            selectAndReplace(node, format(node.data, format$1));
    }
    if (toNode.nodeType === 3) {
        const str = toNode.data;
        const text1 = format(str.substring(0, toOffset), format$1);
        const text2 = str.substring(toOffset);
        selectAndReplace(toNode, text1 + text2);
    }
    else
        formatChildren(format$1, toNode, 0, toOffset);
};

function determineIfHTMLorText(toBeDetermined) {
    if (toBeDetermined.outerHTML) {
        return true;
    }
    return false;
}
const isDiv = (node) => {
    console.log('called', node);
    if (determineIfHTMLorText(node)) {
        console.log('yes');
        console.log('oh', node.outerHTML);
        return node.outerHTML.startsWith('<div>');
    }
    else
        return false;
};
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
                const att = node.getAttribute('data-code');
                // must use node.innerText on span for Edge compatibility
                const anyNode = node;
                // The below line is added due to a chrome bug that breaks
                // the wysiwyg this atleast keeps the output consitent with the textarea display
                if (anyNode.previousSibling && isDiv(anyNode.previousSibling))
                    arr.push('\n');
                if (att)
                    arr.push({ code: att, inputText: node.getAttribute('data-label') || '', previewText: node.getAttribute('data-preview') || '' });
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

// import setNewRange from './setNewRange';
const defaults = {
    border: '1px solid black',
    borderRadius: 5,
    minHeight: 40,
    padding: 15,
    display: 'block',
    whiteSpace: 'pre-wrap',
    width: '100%',
};
class UnicodeTextArea extends Component {
    constructor(props) {
        super(props);
        this.throttling = false;
        this.shouldUpdate = false;
        this.updateState = () => {
            if (this.props.throttle)
                this.throttle();
            else
                this.props.onChange(makeState(this.textAreaRef.current));
        };
        this.throttle = () => {
            if (this.throttling) {
                this.shouldUpdate = true;
                return;
            }
            else {
                this.props.onChange(makeState(this.textAreaRef.current));
                this.throttling = true;
                setTimeout(() => {
                    if (this.shouldUpdate) {
                        this.props.onChange(makeState(this.textAreaRef.current));
                        this.shouldUpdate = false;
                    }
                    this.throttling = false;
                }, this.props.throttleInterval);
            }
        };
        this.refresh = () => {
            if (!this.textAreaRef.current)
                return;
            this.textAreaRef.current.innerHTML = '';
            applyStateToTextArea1(this.props.startValue, this.textAreaRef.current);
        };
        this.handlePaste = (e) => {
            // The below line is a workaround where chrome will insert a span into a new line which becomes inaccessable
            // This will be replaced with better cleanup logic
            setTimeout(() => {
                const state = makeState(this.textAreaRef.current);
                this.textAreaRef.current.innerHTML = '';
                applyStateToTextArea1(state, this.textAreaRef.current);
            }, 5);
            // doPaste();
        };
        this.props = props;
        this.textAreaRef = createRef();
        this.listener = null;
        document.execCommand('defaultParagraphSeparator', false, 'div');
    }
    componentDidMount() {
        applyStateToTextArea1(this.props.startValue, this.textAreaRef.current);
        this.textAreaRef.current.addEventListener("input", this.updateState, false);
        //this.textAreaRef.current.addEventListener('paste', () => {setTimeout(this.refresh,0)}, false);
    }
    componentWillUnmount() {
        this.textAreaRef.current.removeEventListener("input", this.updateState, false);
        //this.textAreaRef.current.removeEventListener('paste', () => {setTimeout(this.refresh,0)}, false);
    }
    isFocused() {
        const selection = document.getSelection();
        if (!selection)
            return false;
        if (document.activeElement === this.textAreaRef.current)
            return true;
        return this.textAreaRef.current.contains(selection === null || selection === void 0 ? void 0 : selection.anchorNode);
    }
    format(format) {
        if (!this.textAreaRef.current)
            return;
        if (!this.isFocused())
            return;
        formatSelection(this.textAreaRef.current, format);
        this.updateState();
    }
    addVariable(options) {
        if (!this.textAreaRef.current)
            return;
        if (!this.isFocused())
            return;
        addVariableElement(this.textAreaRef.current, options);
        this.updateState();
    }
    addText(text) {
        if (!this.textAreaRef.current)
            return;
        if (!this.isFocused())
            return;
        document.execCommand('insertText', false, text);
        this.updateState();
    }
    render() {
        return (jsx("div", { id: "jazzy-ce-area", contentEditable: !this.props.disabled, role: "textbox", "aria-label": "textarea", tabIndex: 0, onPaste: this.handlePaste, className: this.props.className, style: Object.assign(Object.assign({}, defaults), this.props.textareaStyle), ref: this.textAreaRef }, void 0));
    }
}
// eslint-disable-next-line react/static-property-placement
UnicodeTextArea.defaultProps = {
    textareaStyle: {},
    disabled: false,
    className: '',
    throttle: true,
    throttleInterval: 200
};

export default UnicodeTextArea;
