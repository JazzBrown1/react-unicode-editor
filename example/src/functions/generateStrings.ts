import { EditorState, formatText } from 'react-unicode-editor';

export const generatePreviewString = (state: EditorState) => state.reduce<string>((acc, cur) => {
  if (typeof cur === 'string') return acc + cur;
  return cur.format === 'normal' ? acc + cur.previewText : acc + formatText(cur.previewText, cur.format || 'normal');
}, '');

export const generateSerializedString = (
  state: EditorState,
) => state.reduce<string>((acc, cur) => {
  if (typeof cur === 'string') return acc + cur;
  return acc + cur.code;
}, '');
