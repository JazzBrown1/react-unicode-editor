import { VariableOptions } from './makeState';

const defaultVariableStyles = {
  display: 'inline-block',
  userSelect: 'all',
  backgroundColor: '#d8d8d8',
  borderRadius: '5px',
  padding: '2px 0',
};

const createVariableElement = (ops: VariableOptions): HTMLSpanElement => {
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

export default createVariableElement;
