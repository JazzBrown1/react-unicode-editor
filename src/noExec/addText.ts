import addElement from './addElement';

const addText = (ta: HTMLDivElement, text: string) => {
  const selection:Selection | null = window.getSelection();
  if (selection && selection.type === 'Range') {
    // Range is not supported
    return;
  }
  const newElement:Text = new Text(text);
  addElement(ta, selection, newElement);
};

export default addText;
