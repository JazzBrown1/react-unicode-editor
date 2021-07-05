import { TextAreaState } from './makeState';
import createVariableElement from './createVariableElement';

const applyStateToTextArea1 = (state: TextAreaState, textArea: HTMLDivElement) => {
  const p = document.createElement('div');
  textArea.appendChild(p)
  let row = p;
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
      const span = createVariableElement(el);
      row.appendChild(span);
    }
  });
};

const applyStateToTextArea2 = (state: TextAreaState, textArea: HTMLDivElement) => {
  let row = textArea;
  state.forEach((el) => {
    if (typeof el === 'string') {
      const str = new Text(el);
      row.appendChild(str);
    } else {
      const span = createVariableElement(el);
      row.appendChild(span);
    }
  });
};

export default applyStateToTextArea1;

export {applyStateToTextArea1, applyStateToTextArea2}
