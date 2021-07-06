/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
import React, { Component, createRef, RefObject } from 'react';
import addVariableElement from './noExec/addVariableElement';
import applyStateToTextArea from './applyStateToTextArea';
import formatSelection from './exec/formatSelection';
import makeState, { EditorState, VariableOptions } from './makeState';
// import doPaste from './noExec/doPaste';
// import setNewRange from './setNewRange';

const defaults: React.CSSProperties = {
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
  textareaStyle?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  throttle?: boolean;
  throttleInterval?: number;
}
class UnicodeTextArea extends Component {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    textareaStyle: {},
    disabled: false,
    className: '',
    throttle: true,
    throttleInterval: 200,
    startValue: [],
  }

  // eslint-disable-next-line react/static-property-placement
  props: Props;

  editorRef: RefObject<HTMLDivElement>;

  throttling:boolean = false;

  shouldUpdate:boolean = false;

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.editorRef = createRef<HTMLDivElement>();
    document.execCommand('defaultParagraphSeparator', false, 'div');
  }

  componentDidMount() {
    if (!this.editorRef.current) return;
    applyStateToTextArea(this.props.startValue || [], this.editorRef.current);
    this.editorRef.current.addEventListener('input', this.updateState, false);
  }

  componentWillUnmount() {
    if (!this.editorRef.current) return;
    this.editorRef.current.removeEventListener('input', this.updateState, false);
  }

  handlePaste = () => {
    // The below line is a workaround where chrome will insert a span into a new
    // line which becomes inaccessable This will be replaced with better cleanup logic
    setTimeout(() => {
      if (!this.editorRef.current) return;
      const state = makeState(this.editorRef.current);
      this.editorRef.current.innerHTML = '';
      applyStateToTextArea(state, this.editorRef.current);
    }, 5);
    // doPaste();
  }

  isFocused():boolean {
    const selection = document.getSelection();
    if (!selection) return false;
    if (document.activeElement === this.editorRef.current) return true;
    return Boolean(this.editorRef.current
      && this.editorRef.current.contains(selection?.anchorNode));
  }

  format(format: string) {
    if (!this.editorRef.current) return;
    if (!this.isFocused()) return;
    formatSelection(this.editorRef.current, format);
    this.updateState();
  }

  updateState = () => {
    if (this.props.throttle) this.throttle();
    else this.props.onChange(makeState(this.editorRef.current));
  }

  throttle = () => {
    if (this.throttling) {
      this.shouldUpdate = true;
    } else {
      this.props.onChange(makeState(this.editorRef.current));
      this.throttling = true;
      setTimeout(() => {
        if (this.shouldUpdate) {
          this.props.onChange(makeState(this.editorRef.current));
          this.shouldUpdate = false;
        }
        this.throttling = false;
      }, this.props.throttleInterval);
    }
  }

  refresh = () => {
    if (!this.editorRef.current) return;
    this.editorRef.current.innerHTML = '';
    applyStateToTextArea(this.props.startValue || [], this.editorRef.current);
  }

  addVariable(options: VariableOptions) {
    if (!this.editorRef.current) return;
    if (!this.isFocused()) return;
    addVariableElement(this.editorRef.current, options);
    this.updateState();
  }

  addText(text:string) {
    if (!this.editorRef.current) return;
    if (!this.isFocused()) return;
    document.execCommand('insertText', false, text);
    this.updateState();
  }

  render() {
    return (
      <div
        id="jazzy-ce-area"
        contentEditable={!this.props.disabled}
        role="textbox"
        aria-label="textarea"
        tabIndex={0}
        onPaste={this.handlePaste}
        className={this.props.className}
        style={{ ...defaults, ...this.props.textareaStyle }}
        ref={this.editorRef}
      />
    );
  }
}

export default UnicodeTextArea;

export type { EditorState, VariableOptions };
