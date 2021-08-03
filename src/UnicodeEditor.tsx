/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */

import React, { Component, createRef, RefObject } from 'react';
import addVariableElement from './noExec/addVariableElement';
import applyStateToTextArea from './applyStateToTextArea';
import formatSelection from './noExec/formatSelection';
import makeState, { EditorState, VariableOptions } from './makeState';
import UndoStack from './UndoStack';
import addText from './noExec/addText';
import handlePaste from './noExec/handlePaste';

const defaults: React.CSSProperties = {
  lineHeight: 1.8,
  border: '1px solid black',
  borderRadius: 5,
  minHeight: 40,
  padding: 15,
  display: 'block',
  whiteSpace: 'pre-wrap',
  width: '100%',
};

interface Props {
  onChange: Function;
  startValue?: EditorState;
  variableStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  debounce?: boolean;
  debounceInterval?: number;
  disableContextMenu?: boolean;
  onContextMenu?: Function;
  undoStackReference?: React.RefObject<UndoStack> | React.MutableRefObject<UndoStack>;
  disableDrag?: boolean
}

class ReactUnicodeEditor extends Component {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    style: {},
    disabled: false,
    className: '',
    debounce: true,
    debounceInterval: 200,
    startValue: [],
    disableContextMenu: false,
    onContextMenu: null,
    undoStackReference: undefined,
    variableStyle: undefined,
    disableDrag: true,
  }

  // eslint-disable-next-line react/static-property-placement
  props: Props;
  editorRef: RefObject<HTMLDivElement>;
  debouncing:boolean = false;
  shouldUpdate:boolean = false;
  history: UndoStack;
  debounceTimer: number | null = null;
  shouldAddHistory: boolean = false;

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.editorRef = createRef<HTMLDivElement>();
    this.history = props.undoStackReference
      && props.undoStackReference.current
      ? props.undoStackReference.current
      : new UndoStack('');
    document.execCommand('defaultParagraphSeparator', false, 'div');
  }

  componentDidMount() {
    if (!this.editorRef.current) return;
    applyStateToTextArea(
      this.props.startValue || [], this.editorRef.current, this.props.variableStyle,
    );
    this.history.replace(this.editorRef.current.innerHTML);
    this.editorRef.current.addEventListener('paste', this.pasteHandler, false);
    this.editorRef.current.addEventListener('input', this.inputHandler, false);
    this.editorRef.current.addEventListener('keydown', this.keydownHandler, false);
  }

  componentWillUnmount() {
    if (!this.editorRef.current) return;
    this.editorRef.current.removeEventListener('paste', this.pasteHandler, false);
    this.editorRef.current.removeEventListener('input', this.inputHandler, false);
    this.editorRef.current.removeEventListener('keydown', this.keydownHandler, false);
    // Remove timer and update immediately if debouncing
    if (this.debounceTimer !== null) {
      window.clearTimeout(this.debounceTimer);
      if (this.shouldUpdate) this.props.onChange(makeState(this.editorRef.current));
    }
  }

  private pasteHandler = () => {
    setTimeout(() => {
      if (!this.editorRef.current) return;
      const state = makeState(this.editorRef.current);
      this.editorRef.current.innerHTML = '';
      applyStateToTextArea(state, this.editorRef.current, this.props.variableStyle);
      this.history.add(this.editorRef.current.innerHTML);
      this.shouldAddHistory = true;
      this.updateState(state);
    }, 0);
  }

  private inputHandler = (e:any) => { // InputEvent causes errors?
    if (!this.editorRef.current) return true;
    switch (e.inputType) {
      case 'historyUndo':
        if (this.history.back() === false) return false;
        this.editorRef.current.innerHTML = this.history.getState();
        this.shouldAddHistory = true;
        this.updateState();
        return false;
      case 'historyRedo':
        if (this.history.forward() === false) return false;
        this.editorRef.current.innerHTML = this.history.getState();
        this.shouldAddHistory = true;
        this.updateState();
        return false;
      case 'insertText':
        if (this.shouldAddHistory || e.data === null || e.data === ' ' || this.editorRef.current.innerHTML.length === 1) this.history.add(this.editorRef.current.innerHTML);
        else this.history.replace(this.editorRef.current.innerHTML);
        this.shouldAddHistory = false;
        this.updateState();
        break;
      case 'insertParagraph':
        this.shouldAddHistory = true;
        this.history.add(this.editorRef.current.innerHTML);
        this.updateState();
        break;
      case 'insertFromPaste':
        break;
      case '':
        this.pasteHandler();
        break;
      default:
        this.history.add(this.editorRef.current.innerHTML);
        this.shouldAddHistory = true;
        this.updateState();
    }
    return true;
  }

  private keydownHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 90 && e.ctrlKey) {
      e.preventDefault();
      if (!this.editorRef.current || this.history.back() === false) return;
      this.shouldAddHistory = true;
      this.editorRef.current.innerHTML = this.history.getState();
      this.updateState();
    }
    if (e.keyCode === 89 && e.ctrlKey) {
      e.preventDefault();
      if (!this.editorRef.current || this.history.forward() === false) return;
      this.shouldAddHistory = true;
      this.editorRef.current.innerHTML = this.history.getState();
      this.updateState();
    }
  }

  private updateState = (state?: EditorState) => {
    if (this.props.debounce) this.debounce();
    else this.props.onChange(state || makeState(this.editorRef.current));
  }

  private debounce = () => {
    if (this.debouncing) {
      this.shouldUpdate = true;
    } else {
      this.props.onChange(makeState(this.editorRef.current));
      this.debouncing = true;
      this.debounceTimer = window.setTimeout(() => {
        if (this.shouldUpdate) {
          this.props.onChange(makeState(this.editorRef.current));
          this.shouldUpdate = false;
        }
        this.debouncing = false;
        this.debounceTimer = null;
      }, this.props.debounceInterval);
    }
  }

  private isFocused():boolean {
    const selection = document.getSelection();
    if (!selection) return false;
    if (document.activeElement === this.editorRef.current) return true;
    return Boolean(this.editorRef.current
      && this.editorRef.current.contains(selection?.anchorNode));
  }

  canUndo = () => this.history.allowedBack()

  undo = () => {
    if (!this.editorRef.current || this.props.disabled) return;
    const html = this.history.back();
    if (html !== false) this.editorRef.current.innerHTML = html;
    this.shouldAddHistory = true;
    this.updateState();
  }

  paste = () => {
    if (!this.editorRef.current || this.props.disabled) return;
    this.shouldAddHistory = true;
    handlePaste();
  }

  canRedo = () => this.history.allowedForward()

  redo = () => {
    if (!this.editorRef.current || this.props.disabled) return;
    const html = this.history.forward();
    if (html) this.editorRef.current.innerHTML = html;
    this.shouldAddHistory = true;
    this.updateState();
  }

  format = (format: string) => {
    if (!this.editorRef.current || this.props.disabled) return;
    if (!this.isFocused()) return;
    formatSelection(this.editorRef.current, format);
    this.history.add(this.editorRef.current.innerHTML);
    this.shouldAddHistory = true;
    this.updateState();
  }

  refresh = () => {
    if (!this.editorRef.current) return;
    this.editorRef.current.innerHTML = '';
    applyStateToTextArea(
      this.props.startValue || [], this.editorRef.current, this.props.variableStyle,
    );
  }

  addVariable = (options: VariableOptions) => {
    if (!this.editorRef.current || this.props.disabled) return;
    if (!this.isFocused()) return;
    addVariableElement(this.editorRef.current, options, this.props.variableStyle);
    this.history.add(this.editorRef.current.innerHTML);
    this.shouldAddHistory = true;
    this.updateState();
  }

  addText = (text:string) => {
    if (!this.editorRef.current || this.props.disabled) return;
    if (!this.isFocused()) return;
    addText(this.editorRef.current, text);
    this.shouldAddHistory = true;
    this.history.add(this.editorRef.current.innerHTML);
    this.updateState();
  }

  private onDrop = (e: React.DragEvent) => {
    if (this.props.disableDrag) e.preventDefault();
    else this.pasteHandler();
  }

  private onContextMenu = (e: React.MouseEvent) => {
    if (this.props.disableContextMenu) e.preventDefault();
    if (this.props.onContextMenu) this.props.onContextMenu(e);
  }

  render() {
    return (
      <div
        className={`react-unicode-editor ${this.props.className || ''}`}
        contentEditable={!this.props.disabled}
        role="textbox"
        aria-label="textarea"
        onContextMenu={this.onContextMenu}
        onDrop={this.onDrop}
        tabIndex={0}
        style={{ ...defaults, ...this.props.style }}
        ref={this.editorRef}
      />
    );
  }
}

export default ReactUnicodeEditor;
