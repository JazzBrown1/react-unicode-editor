import { EditorState } from 'react-unicode-editor';

export const generatePreviewString = (state: EditorState) => state.reduce<string>((acc, cur) => {
  if (typeof cur === 'string') return acc + cur;
  return acc + cur.previewText;
}, '');

export const generateSerializedString = (
  state: EditorState,
) => state.reduce<string>((acc, cur) => {
  if (typeof cur === 'string') return acc + cur;
  return acc + cur.code;
}, '');
