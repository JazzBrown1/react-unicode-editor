/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
import unicodeFormat from '../unicodeUtil/unicode';
// blah

import { determineIfHTMLorText } from '../makeState';

const formatTextNode = (node: Text, format: string, from: number, to: number) => {
  const localFrom = from < to ? from : to;
  const localTo = from < to ? to : from;
  const str1 = node.data.substring(0, localFrom);
  const str2 = node.data.substring(localFrom, localTo);
  const str3 = node.data.substring(localTo, node.data.length);
  node.data = str1 + unicodeFormat(str2, format) + str3;
};

// The browsers can add deeply nested divs and spans during pastes and drags etc
// This function has to recurse to any depth and deal with a range of scenarios

// Its long and inefficient (it iterates the whole textarea) but it finally works :)
// I might come back to this and find a better solution but I think it is fit for use for now

type TempRange = {
  anchorOffset: number,
  anchorNode: Node,
  focusNode: Node,
  focusOffset: number,
}

const formatSelectionWrapper = (
  _parent : HTMLElement | Node, selection:Selection, format: string,
) : void => {
  let formatting = false;
  if (!selection || !selection.anchorNode || !selection.focusNode) return;
  const range : TempRange = {
    anchorOffset: selection.anchorOffset,
    anchorNode: selection.anchorNode,
    focusNode: selection.focusNode,
    focusOffset: selection.focusOffset,
  };
  console.log({ ...range });

  const formatSelectionRecurse = (parent : HTMLElement | Node) => {
    const nodes = <Array<Text | HTMLElement>>Array.from(parent.childNodes);
    const parentIsAnchor = parent === selection.anchorNode;
    const parentIsFocus = parent === selection.focusNode;
    nodes.forEach((node, index) => {
      if (determineIfHTMLorText(node)) {
        if (node.nodeType === 1 && !node.getAttribute('data-code')) {
          // If HTML el but not variable span recurseif (
          if ((parentIsAnchor && selection.anchorOffset === index)
          || (parentIsFocus && selection.focusOffset === index)
          ) {
            formatting = !formatting;
          }
          formatSelectionRecurse(node);
        } else if (node.nodeType === 1) {
          // if variable span do some checks and format if required
          const isAnchor = (
            node === selection.anchorNode || (parentIsAnchor && selection.anchorOffset === index)
          );
          const isFocus = (
            node === selection.focusNode || (parentIsFocus && selection.focusOffset === index)
          );
          if (isAnchor && isFocus) node.setAttribute('data-format', format);
          else if (isAnchor || isFocus) {
            node.setAttribute('data-format', format);
            formatting = !formatting;
          } else if (formatting) {
            node.setAttribute('data-format', format);
          }
        }
      } else {
        // Else if text node format accordignly - Loooooaddds of scenarios urggh;
        // eslint-disable-next-line no-lonely-if
        if (
          (parentIsAnchor && selection.anchorOffset === index)
          || (parentIsFocus && selection.focusOffset === index)
        ) {
          if (!formatting) node.data = unicodeFormat(node.data, format);
          formatting = !formatting;
        } else if (node === selection.anchorNode && node === selection.focusNode) {
          const from = Math.min(selection.anchorOffset, selection.focusOffset);
          const to = Math.max(selection.anchorOffset, selection.focusOffset);
          const charsFromEnd = node.data.length - to;
          formatTextNode(node, format, from, to);
          range.anchorOffset = node.data.length - charsFromEnd;
          range.focusOffset = from;
        } else if (node === selection.anchorNode) {
          if (formatting) {
            const charsFromEnd = node.data.length - selection.anchorOffset;
            formatTextNode(node, format, 0, selection.anchorOffset);
            range.anchorOffset = node.data.length - charsFromEnd;
            console.log({
              oldOffset: selection.anchorOffset, newOffset: node.data.length - charsFromEnd,
            });
          } else {
            formatTextNode(node, format, selection.anchorOffset, node.data.length);
          }
          formatting = !formatting;
        } else if (node === selection.focusNode) {
          if (formatting) {
            const oldOffset = selection.focusOffset;
            const charsFromEnd = node.data.length - selection.focusOffset;
            formatTextNode(node, format, 0, selection.focusOffset);
            range.focusOffset = node.data.length - charsFromEnd;
            console.log({
              oldOffset, newOffset: node.data.length - charsFromEnd,
            });
          }
          if (formatting) formatTextNode(node, format, 0, selection.focusOffset);
          else formatTextNode(node, format, selection.focusOffset, node.data.length);
          formatting = !formatting;
        } else if (formatting) {
          node.data = unicodeFormat(node.data, format);
        }
      }
    });
    if (
      (parentIsFocus && parent.childNodes.length === selection.focusOffset)
      || (parentIsAnchor && parent.childNodes.length === selection.anchorOffset)
    ) {
      formatting = !formatting;
    }
  };

  formatSelectionRecurse(_parent);

  const newRange = new Range();
  const direction = range.anchorNode.compareDocumentPosition(range.focusNode);
  if (direction === 4) {
    newRange.setStart(range.anchorNode, range.anchorOffset);
    newRange.setEnd(range.focusNode, range.focusOffset);
  } else if (direction === 2) {
    newRange.setEnd(range.anchorNode, range.anchorOffset);
    newRange.setStart(range.focusNode, range.focusOffset);
  } else if (range.anchorOffset < range.focusOffset) {
    newRange.setStart(range.anchorNode, range.anchorOffset);
    newRange.setEnd(range.focusNode, range.focusOffset);
  } else {
    newRange.setEnd(range.anchorNode, range.anchorOffset);
    newRange.setStart(range.focusNode, range.focusOffset);
  }
  console.log(range);
  document.getSelection()?.removeAllRanges();
  document.getSelection()?.addRange(newRange);
};

const formatSelection = (TextAreaElement: Node, format: string) => {
  const selection:Selection | null = window.getSelection();
  if (!selection || !selection.anchorNode || !selection.focusNode) return;
  formatSelectionWrapper(TextAreaElement, selection, format);
};

export default formatSelection;
