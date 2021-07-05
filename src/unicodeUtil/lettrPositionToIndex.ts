const letterPositionToIndex = (str: string, position: number):number => {
  let i = 0;
  let index = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const letter of str) { // Breaks IE
    if (i === position) {
      break;
    }
    index += letter.length;
    i += 1;
  }
  return index;
};

export default letterPositionToIndex;
