import React from 'react';
import {
  DropdownButton, Dropdown, ButtonGroup, Button,
} from 'react-bootstrap';

interface props {
  onFormatClick: Function;
}

const formats = [
  ['normal', ' Normal abc'],
  ['sansBold', 'Bold (Sans) 𝗮𝗯𝗰'],
  ['sansItalic', 'Italic (Sans) 𝘢𝘣𝘤'],
  ['sansBoldItalic', 'Bold Italic (Sans) 𝙖𝙗𝙘'],
  ['bold', 'Bold (Serif) 𝐚𝐛𝐜'],
  ['italic', 'Italic (Serif) 𝑎𝑏𝑐'],
  ['boldItalic', 'Bold Italic (Serif) 𝒂𝒃𝒄'],
  ['script', 'Script 𝒶𝒷𝒸'],
  ['scriptBold', 'Script Bold 𝓪𝓫𝓬'],
  ['fraktur', 'Fraktur 𝔞𝔟𝔠'],
  ['frakturBold', 'Frak Bold 𝖆𝖇𝖈'],
  ['monospace', 'Monospace 𝚊𝚋𝚌'],
  ['doublestruck', 'Double 𝕒𝕓𝕔'],
  ['circled', 'Circled ⓐⓑⓒ'],
  ['inverseCircled', 'Circle 2 🅐🅑🅒 (CAPS)'],
  ['squared', 'Squared 🄰🄱🄲 (CAPS)'],
];

const FormatButtons = ({ onFormatClick }: props) => (
  <>
    <Button
      className="mr-1"
      variant="outline-primary"
      onClick={() => {
        onFormatClick('normal');
      }}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      as="div"
    >
      Regular
    </Button>
    <Button
      className="mr-1"
      variant="outline-primary"
      onClick={() => {
        onFormatClick('sansBold');
      }}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      as="div"
    >
      𝐁
    </Button>
    <Button
      className="mr-1"
      variant="outline-primary"
      onClick={() => {
        onFormatClick('sansItalic');
      }}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      as="div"
    >
      𝒊
    </Button>
    <DropdownButton
      onSelect={(format) => {
        onFormatClick(format);
      }}
      as={ButtonGroup}
      key="formats"
      id="dropdown-variants-formats"
      variant="outline-primary"
      title="More..."
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      {formats.map(([format, display]) => (
        <Dropdown.Item key={`fdd_${format}`} eventKey={format}>{display}</Dropdown.Item>
      ))}
    </DropdownButton>
  </>
);

export default FormatButtons;
