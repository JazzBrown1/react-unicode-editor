// Sets the caret focus within the text area div (called after variable added)
const setNewFocus = (TextAreaElement: HTMLDivElement | null, index: number):void => {
  const selection:Selection | null = window.getSelection();
  if (!TextAreaElement) return;
  if (!selection) return;
  TextAreaElement.focus();
  selection.setPosition(TextAreaElement, index);
};

export default setNewFocus;
