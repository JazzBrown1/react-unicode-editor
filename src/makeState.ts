import React from 'react';

export interface VariableOptions {
  code: string;
  inputText: string;
  previewText: string;
  style?: React.CSSProperties | string;
  format?: string;
  className?: string;
}

export type EditorState = Array<VariableOptions | string>

export function determineIfHTMLorText(
  toBeDetermined: Text | HTMLElement,
): toBeDetermined is HTMLElement {
  if ((toBeDetermined as HTMLElement).outerHTML) {
    return true;
  }
  return false;
}

const isDiv = (node: Text | HTMLElement) => {
  if (determineIfHTMLorText(node)) {
    return node.outerHTML.startsWith('<div>');
  } return false;
};

// The browsers can add deeply nested divs and spans during pastes and drags etc
// This function has to recurse to any depth and deal with a range of scenarios

const flattenTree = (arr: EditorState, parent : HTMLElement) => {
  const nodes = <Array<Text | HTMLElement>>Array.from(parent.childNodes);
  nodes.forEach((node, i) => {
    if (determineIfHTMLorText(node)) {
      if (node.nodeType === 1 && !node.getAttribute('data-code')) {
      // Only subsequent divs are linebreaks
        if (i !== 0 && node.outerHTML.startsWith('<div>')) arr.push('\n');
        if ((node.previousSibling || node.nextSibling) && node.outerHTML.startsWith('<br>')) arr.push('\n');
        flattenTree(arr, node);
      } else if (node.nodeType === 1) {
        const isVariable = node.getAttribute('data-code');
        // must use node.innerText on span for Edge compatibility
        const anyNode:any = node;
        // The below line is added due to a chrome bug that breaks
        // the wysiwyg this atleast keeps the output consitent with the textarea display
        if (anyNode.previousSibling && isDiv(anyNode.previousSibling)) arr.push('\n');
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
    } else arr.push(node.data);
  });
};

const makeState = (TextAreaElement: HTMLDivElement | null): EditorState => {
  if (!TextAreaElement) return [];
  const arr:EditorState = [];
  flattenTree(arr, TextAreaElement);
  return arr;
};

export default makeState;
