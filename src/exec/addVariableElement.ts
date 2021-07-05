// -import addElement from './addElement';
import createVariableElement from '../createVariableElement';
import { VariableOptions } from '../makeState';

// Adds a variable element to the text   area
const addVariableElement = (
  textAreaElement: HTMLDivElement, options: VariableOptions,
):void => {
  console.log(document.getSelection());
  const newElement:string = createVariableElement(options).outerHTML;
  console.log(newElement);
  document.execCommand('insertHTML', false, newElement);
};

export default addVariableElement;
