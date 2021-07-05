import { setFlagsFromString } from "v8";

export interface VariableOptions {
  code: string;
  inputText: string;
  previewText: string;
  styles?: string;
  format?: string
}

export type TextAreaState = Array<VariableOptions | string>

export function determineIfHTMLorText(toBeDetermined: Text | HTMLElement): toBeDetermined is HTMLElement {
  if((toBeDetermined as HTMLElement).outerHTML){
    return true
  }
  return false
}

const isDiv = (node: Text | HTMLElement) => {
  console.log('called', node)
  if(determineIfHTMLorText(node)){
    console.log('yes')
    console.log('oh', node.outerHTML)
    return node.outerHTML.startsWith('<div>');
  } else return false;
}

const flattenTree = (arr: TextAreaState, parent : HTMLElement) => {
  const nodes = <Array<Text | HTMLElement>>Array.from(parent.childNodes);
  nodes.forEach((node, i) => {
    if(determineIfHTMLorText(node)){
    if (node.nodeType === 1 && !node.getAttribute('data-code')) {
      // Only subsequent divs are linebreaks
      if (i !== 0 && node.outerHTML.startsWith('<div>')) arr.push('\n');
      if ((node.previousSibling || node.nextSibling) && node.outerHTML.startsWith('<br>')) arr.push('\n');
      flattenTree(arr, node);
    }
    else if (node.nodeType === 1) {
      const att = node.getAttribute('data-code');
      // must use node.innerText on span for Edge compatibility
      const anyNode:any = node
      // The below line is added due to a chrome bug that breaks
      // the wysiwyg this atleast keeps the output consitent with the textarea display
      if(anyNode.previousSibling && isDiv(anyNode.previousSibling)) arr.push('\n');
      if (att) arr.push({ code: att, inputText: node.getAttribute('data-label') || '', previewText: node.getAttribute('data-preview') || '' });
    }
  } else arr.push(node.data);
  });
};

const makeState = (TextAreaElement: HTMLDivElement | null): TextAreaState => {
  if (!TextAreaElement) return [];
  const arr:TextAreaState = [];
  flattenTree(arr, TextAreaElement);
  return arr;
};

export default makeState;
