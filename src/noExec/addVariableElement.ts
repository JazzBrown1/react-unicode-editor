import React from 'react';

import addElement from './addElement';
import { VariableOptions } from '../makeState';
import createVariableElement from '../createVariableElement';

// Adds a variable element to the text area
const addVariableElement = (
  textAreaElement: HTMLDivElement, options: VariableOptions, variableStyle?: React.CSSProperties,
):void => {
  const newElement:HTMLSpanElement = createVariableElement(options, variableStyle);
  const selection:Selection | null = window.getSelection();
  if (selection && selection.type === 'Range') {
    // eslint-disable-next-line no-console
    console.log('Range is not supported yet');
    return;
  }
  addElement(textAreaElement, selection, newElement);
};

export default addVariableElement;
