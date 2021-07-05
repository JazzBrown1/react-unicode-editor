export const insertNodeAtEnd = (div: HTMLElement, el: HTMLElement | Text): void => {
  div.appendChild(el);
  // div.appendChild(document.createTextNode(''));
};

const insertNodeAtIndex = (div: HTMLElement, el: HTMLElement | Text, index: number): void => {
  console.log('inai called');
  if (div.childNodes[index]) {
    div.insertBefore(el, div.childNodes[index]);
  } else insertNodeAtEnd(div, el);
};

export default insertNodeAtIndex;
