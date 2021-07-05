/* eslint-disable no-continue */
import unicodeFormat from '../unicodeUtil/unicode';
// blah
const getChildren = (node: Node, arr: Array<Node> = []):Array<Node> => {
  Array.from(node.childNodes).forEach((child : any) => {
    arr.push(child);
    if(!child.getAttribute) return;
    const att = child.getAttribute && child.getAttribute('data-code');
    if (!att) getChildren(child, arr);
  });
  return arr;
};

const formatChildren = (node: any, format: string, from: number, to: number | undefined = undefined) => {
  if (node.childNodes.length === 0) return;
  const acTo = to || node.childNodes.length;
  // eslint-disable-next-line no-plusplus
  for (let i = from; i < acTo; i++) {
    const child:any = node.childNodes[i];
    if (child.nodeType === 3) {
      // eslint-disable-next-line no-param-reassign
      child.data = unicodeFormat(child.data, format);
    } else if (child.nodeType === 1 && child.getAttribute('data-code')) continue;
    else formatChildren(child, format,  0);
  }
};

const formatSelection = (TextAreaElement: Node, format: string) => {
  const selection:Selection | null = window.getSelection();
  if (!selection || !selection.anchorNode || !selection.focusNode) return;
  const allChildren = getChildren(TextAreaElement, [TextAreaElement]);
  let from = allChildren.indexOf(selection.anchorNode);
  let to = allChildren.indexOf(selection.focusNode);
  let fromOffset;
  let toOffset;
  if (from > to) {
    const too = to;
    to = from; from = too;
    fromOffset = selection.focusOffset;
    toOffset = selection.anchorOffset;
  } else {
    fromOffset = selection.anchorOffset;
    toOffset = selection.focusOffset;
  }
  const fromNode:any = allChildren[from];
  const toNode:any = allChildren[to];
  if (!fromNode || !toNode) return;
  if (fromNode === toNode) {
    if (fromNode.nodeType === 3) {
      const str = fromNode.data;
      const before = str.substring(0, fromOffset);
      const text = unicodeFormat(str.substring(fromOffset, toOffset), format);
      const after = str.substring(toOffset);
      console.log({before, text, after})

      fromNode.data = before + text + after;
    } else {
      formatChildren(fromNode, format, fromOffset, toOffset);
    }
    return;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = from + 1; i < to; i++) {
    const node:any = allChildren[i];
    if (node.nodeType === 3) node.data = unicodeFormat(node.data, format);
  }
  if (fromNode.nodeType === 3) {
    const str = fromNode.data;
    const text1 = str.substring(0, fromOffset);
    const text2 = unicodeFormat(str.substring(fromOffset), format);
    fromNode.data = text1 + text2;
  } else formatChildren(fromNode, format, fromOffset);
  if (toNode.nodeType === 3) {
    const str = toNode.data;
    const text1 = unicodeFormat(str.substring(0, toOffset), format);
    const text2 = str.substring(toOffset);
    toNode.data = text1 + text2;
  } else formatChildren(toNode, format, 0, toOffset);
};

export default formatSelection;
