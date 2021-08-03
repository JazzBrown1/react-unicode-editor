import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UnicodeEditor, { EditorState, VariableOptions, UndoStack } from 'react-unicode-editor';

// CSS
import './App.css';
import '../node_modules/react-context-menu-hooks/src/ContextMenu.css';

// Components
import { ContextMenuTriggerArea } from 'react-context-menu-hooks';
import FormatButtons from './components/FormatButtons';
import VariableButtons from './components/VariableButtons';
import EmojiComponent from './components/EmojiComponent';
import PreviewDisplay from './components/PreviewDisplay';
import DemoButtons from './components/DemoButtons';
import CharacterCounter from './components/CharacterCounter';
import ContextMenu, { contextMenuBridge } from './components/ContextMenu';

// Functions (& Types)
import { CharacterCount, countCharacters } from './functions/countCharacters';
import { generatePreviewString, generateSerializedString } from './functions/generateStrings';

function App() {
  const [editorValue, setEditorValue] = useState<EditorState>([]);
  const [previewText, setPreviewText] = useState<string>('');
  const [serializedText, setSerializedText] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(true);
  const [chars, setChars] = useState<CharacterCount>({ chars: 0, bytes: 0 });

  // By creating an undoStackReference and passing it to the Editor as a prop the component can
  // maintain undo history between mounts
  const undoStackRef = useRef<UndoStack>(new UndoStack());

  const editorRef = useRef<UnicodeEditor>(null);

  const handleEmojiClick = (text: string) => {
    if (editorRef.current) editorRef.current.addText(text);
  };

  const handleFormatClick = (format: string) => {
    if (editorRef.current) editorRef.current.format(format);
  };

  const handleVariableClick = (options: VariableOptions) => {
    if (editorRef.current) editorRef.current.addVariable(options);
  };

  const handleUndo = () => {
    if (editorRef.current) editorRef.current.undo();
  };

  const handleRedo = () => {
    if (editorRef.current) editorRef.current.redo();
  };

  // Reduce the state object to a strings one for preview one for serialization
  const handleEditorChange = (newState: EditorState) => {
    setEditorValue(newState);
    // Ideally the next three values could be built in a single iteration , for demo
    // purposes I'll leave this as three separate functions, but this does reduce performance
    setPreviewText(generatePreviewString(newState));
    setSerializedText(generateSerializedString(newState));
    setChars(countCharacters(newState));
  };

  const editorStyles: React.CSSProperties = {
    minHeight: 100,
    backgroundColor: disabled ? 'grey' : 'white',
    borderColor: chars.chars > 29 ? 'red' : 'grey',
    outlineColor: chars.chars > 29 ? 'red' : 'grey',
    opacity: disabled ? '50%' : undefined,
  };

  return (
    <>
      <ContextMenu
        undo={handleUndo}
        redo={handleRedo}
        paste={editorRef.current ? editorRef.current.paste : () => {}}
        canUndo={editorRef.current ? editorRef.current.canUndo() : false}
        canRedo={editorRef.current ? editorRef.current.canRedo() : false}
      />
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
                <ContextMenuTriggerArea data={{}} bridge={contextMenuBridge}>
                  <UnicodeEditor
                    onChange={handleEditorChange}
                    startValue={editorValue}
                    disableContextMenu={false}
                    undoStackReference={undoStackRef}
                    ref={editorRef}
                    style={editorStyles}
                    disabled={disabled}
                    debounceInterval={600}
                  />
                </ContextMenuTriggerArea>
              )
              : (<h4 style={{ textAlign: 'center', margin: '1.5em' }}>Not Mounted</h4>)}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={8} md={10}>
            <Row>
              <Col className="mb-2" xs={12} md={7}>
                <FormatButtons onFormatClick={handleFormatClick} />
              </Col>
              <Col xs={12} md={5}>
                <VariableButtons onVariableClick={handleVariableClick} />
              </Col>
            </Row>
          </Col>
          <Col xs={4} md={2}>
            <EmojiComponent insertText={handleEmojiClick} />
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
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
