import React from 'react';
import Picker from 'emoji-picker-react';
import {
  Dropdown,
} from 'react-bootstrap';

interface props {
  insertText: Function;
}

const EmojiComponent = ({ insertText }:props) => {
  const onEmojiClick = (event: any, emojiObject: any) => {
    event.preventDefault();
    insertText(emojiObject.emoji);
  };
  return (
    <Dropdown
      alignRight
      className="float-right"
    >
      <Dropdown.Toggle
        variant="outline-warning"
        id="emoji-dropdown"
        onMouseDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        🙊😀❤️
      </Dropdown.Toggle>

      <Dropdown.Menu>

        <Picker onEmojiClick={onEmojiClick} disableAutoFocus />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default EmojiComponent;
