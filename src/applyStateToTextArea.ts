import React from 'react';
import { EditorState } from './makeState';
import createVariableElement from './createVariableElement';

const applyStateToTextArea1 = (
  state: EditorState, textArea: HTMLDivElement, variableStyle?: React.CSSProperties,
) => {
  // future implementation
  // const p = document.createElement('div');
  // textArea.appendChild(p)
  let row = textArea;
  state.forEach((el, i) => {
    if (typeof el === 'string') {
      if (el === '\n') {
        const newElement:HTMLDivElement = document.createElement('div');
        textArea.appendChild(newElement);
        row = newElement;
        if (!state[i + 1] || state[i + 1] === '\n') newElement.innerHTML = '<br>';
        return;
      }
      const str = new Text(el);
      row.appendChild(str);
    } else {
      const span = createVariableElement(el, variableStyle);
      row.appendChild(span);
    }
  });
};

export default applyStateToTextArea1;
