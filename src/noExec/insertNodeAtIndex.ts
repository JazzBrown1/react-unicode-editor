export const insertNodeAtEnd = (div: HTMLElement, el: HTMLElement | Text): void => {
  div.appendChild(el);
};

const insertNodeAtIndex = (div: HTMLElement, el: HTMLElement | Text, index: number): void => {
  if (div.childNodes[index]) {
    div.insertBefore(el, div.childNodes[index]);
  } else div.appendChild(el);
};

export default insertNodeAtIndex;
