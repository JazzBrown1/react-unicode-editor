import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UnicodeEditor, { EditorState, VariableOptions } from 'react-unicode-editor';

// CSS
import './App.css';

// Components
import FormatButtons from './components/FormatButtons';
import VariableButtons from './components/VariableButtons';
import EmojiComponent from './components/EmojiComponent';
import PreviewDisplay from './components/PreviewDisplay';
import DemoButtons from './components/DemoButtons';
import CharacterCounter from './components/CharacterCounter';

// Functions (& Types)
import { CharacterCount, countCharacters } from './functions/countCharacters';
import { generatePreviewString, generateSerializedString } from './functions/generateStrings';

function App() {
  const [editorValue, setEditorValue] = useState<EditorState>([]);
  const [previewText, setPreviewText] = useState<string>('');
  const [serializedText, setSerializedText] = useState<string>('');
  const [color, setColor] = useState<string>('white');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(true);
  const [chars, setChars] = useState<CharacterCount>({ chars: 0, bytes: 0 });

  const editorRef = useRef<UnicodeEditor>(null);

  const insertText = (text: string) => {
    if (editorRef.current) editorRef.current.addText(text);
  };

  const onFormatClick = (format: string) => {
    if (editorRef.current) editorRef.current.format(format);
  };

  const onVariableClick = (options: VariableOptions) => {
    if (editorRef.current) editorRef.current.addVariable(options);
  };

  // Reduce the state object to a strings one for preview one for serialization
  const onEditorChange = (newState: EditorState) => {
    setEditorValue(newState);
    setPreviewText(generatePreviewString(newState));
    setSerializedText(generateSerializedString(newState));
    setChars(countCharacters(newState));
  };

  return (
    <Container className="p-3">
      <Row className="mb-4 border-bottom">
        <Col><h1 className="h3">react-unicode-editor example</h1></Col>
      </Row>
      <Row>
        <Col><CharacterCounter chars={chars} /></Col>
      </Row>
      <Row className="mb-2">
        <Col>
          {mounted
            ? (
              <UnicodeEditor
                startValue={editorValue}
                onChange={onEditorChange}
                ref={editorRef}
                textareaStyle={{
                  minHeight: 100,
                  backgroundColor: disabled ? 'grey' : color,
                  borderColor: chars.chars > 29 ? 'red' : 'grey',
                  outlineColor: chars.chars > 29 ? 'red' : 'grey',
                }}
                disabled={disabled}
                throttleInterval={300}
              />
            )
            : 'Not Mounted'}
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={8} md={10}>
          <Row>
            <Col className="mb-2" xs={12} md={7}>
              <FormatButtons onFormatClick={onFormatClick} />
            </Col>
            <Col xs={12} md={5}>
              <VariableButtons onVariableClick={onVariableClick} />
            </Col>
          </Row>
        </Col>
        <Col xs={4} md={2}>
          <EmojiComponent insertText={insertText} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={12} md={6}><PreviewDisplay heading="Preview:" text={previewText} /></Col>
        <Col sm={12} md={6}><PreviewDisplay heading="Serialized:" text={serializedText} /></Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <DemoButtons
            mounted={mounted}
            setMounted={setMounted}
            disabled={disabled}
            setDisabled={setDisabled}
            color={color}
            setColor={setColor}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
