import insertNodeAtIndex from '../insertNodeAtIndex';
import setNewFocus from '../setNewFocus';

const addElement = (
  textAreaElement: HTMLDivElement, selection: Selection | null, newElement: HTMLSpanElement | Text,
) => {
  if (!selection) return;
  const anchor:any = selection.anchorNode;
  if (!anchor) return;
  if (anchor.nodeType === 1) {
    // If node type is element add at that position
    insertNodeAtIndex(anchor, newElement, selection.anchorOffset);
    setNewFocus(anchor, selection.anchorOffset + 1);
  } else if (anchor.nodeType === 3) {
    const textParent = anchor.parentNode;
    const index = [...textParent.childNodes].indexOf(anchor);
    if (selection.anchorOffset === 0) {
      // insert before text
      insertNodeAtIndex(textParent, newElement, index);
    } else if (selection.anchorOffset === anchor.nodeValue!.length) {
      // insert after text
      insertNodeAtIndex(textParent, newElement, index + 1);
      setNewFocus(textParent, index + 2);
    } else {
      // split text and insert in middle
      const str:String = anchor.nodeValue || '';
      const text1 = str.substring(0, selection.anchorOffset);
      const text2 = str.substring(selection.anchorOffset);
      // Check this
      // eslint-disable-next-line no-param-reassign
      anchor.nodeValue = text1;
      const text2El = document.createTextNode(text2);
      insertNodeAtIndex(textParent, newElement, index + 1);
      insertNodeAtIndex(textParent, text2El, index + 2);
      setNewFocus(textParent, index + 2);
    }
    // If node type is text split the text and insert element between
  }
};

export default addElement;
