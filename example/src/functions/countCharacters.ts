import { EditorState } from 'react-unicode-editor';

export type CharacterCount = {
  chars: number;
  bytes: number;
}

export const countCharacters = (arr: EditorState) => {
  const count = arr.reduce<CharacterCount>((acc, cur) => (typeof cur === 'string'
    ? { chars: acc.chars + Array.from(cur).length, bytes: acc.bytes + cur.length }
    : acc), { chars: 0, bytes: 0 });
  return count;
};
