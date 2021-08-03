import React from 'react';
import { VariableOptions } from './makeState';

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

const createVariableElement = (
  ops: VariableOptions, variableStyle?: React.CSSProperties,
): HTMLSpanElement => {
  let stylesObject;
  let stylesString;
  if (typeof ops.style === 'string') {
    stylesObject = ops.style ? JSON.parse(ops.style) : {};
    stylesString = ops.style;
  } else if (typeof ops.style === 'object') {
    stylesObject = ops.style;
    stylesString = JSON.stringify(ops.style);
  } else {
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

export default createVariableElement;
