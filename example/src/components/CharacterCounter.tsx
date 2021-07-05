import React from 'react';

const CharacterCounter = ({ chars }:{chars: any}) => (
  <>
    Characters:
    {' '}
    <span style={chars.chars > 29 ? { color: 'red', fontWeight: 'bold' } : {}}>{chars.chars}</span>
    {' '}
    - Bytes:
    {' '}
    {chars.bytes}
  </>
);

export default CharacterCounter;
