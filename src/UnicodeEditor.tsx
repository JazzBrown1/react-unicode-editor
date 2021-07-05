/* eslint-disable react/destructuring-assignment */
import React, { Component, createRef } from 'react';
import addVariableElement from './noExec/addVariableElement';
import applyStateToTextArea from './applyStateToTextArea';
import formatSelection from './exec/formatSelection';
import makeState, { TextAreaState, VariableOptions } from './makeState';
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
  startValue: TextAreaState;
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
    throttleInterval: 200
  }
  textAreaRef: any;
  props: Props
  listener: EventListener | null;
  throttling:boolean = false;
  shouldUpdate:boolean = false;

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.textAreaRef = createRef();
    this.listener = null;
    document.execCommand('defaultParagraphSeparator', false, 'div');
  }

  componentDidMount() {
    applyStateToTextArea(this.props.startValue, this.textAreaRef.current);
    this.textAreaRef.current.addEventListener("input", this.updateState, false);
    //this.textAreaRef.current.addEventListener('paste', () => {setTimeout(this.refresh,0)}, false);
  }

  componentWillUnmount() {
    this.textAreaRef.current.removeEventListener("input", this.updateState, false);
    //this.textAreaRef.current.removeEventListener('paste', () => {setTimeout(this.refresh,0)}, false);
  }

  isFocused():boolean {
    const el = document.activeElement;
    const selection = document.getSelection();
    if(!selection) return false;
    if(document.activeElement === this.textAreaRef.current) return true;
    return this.textAreaRef.current.contains(selection?.anchorNode);
  }

  format(format: string) {
    if (!this.textAreaRef.current) return;
    if(!this.isFocused()) return;
    formatSelection(this.textAreaRef.current, format);
    this.updateState();
  }

  updateState = () => {
    if(this.props.throttle) this.throttle();
    else this.props.onChange(makeState(this.textAreaRef.current));
  }

  throttle = () => {
    if(this.throttling) {
      this.shouldUpdate = true;
      return;
    } else {
      this.props.onChange(makeState(this.textAreaRef.current));
      this.throttling = true;
      setTimeout(() => {
        if(this.shouldUpdate) {
          this.props.onChange(makeState(this.textAreaRef.current));
          this.shouldUpdate = false;
        }
        this.throttling = false;
      }, this.props.throttleInterval)
    }
  }

  refresh = () => {
    if (!this.textAreaRef.current) return;
    this.textAreaRef.current.innerHTML='';
    applyStateToTextArea(this.props.startValue, this.textAreaRef.current);
  }

  addVariable(options: VariableOptions) {
    if (!this.textAreaRef.current) return;
    if(!this.isFocused()) return;
    addVariableElement(this.textAreaRef.current, options);
    this.updateState();
  }

  addText(text:string) {
    if (!this.textAreaRef.current) return;
    if(!this.isFocused()) return;
    document.execCommand('insertText', false, text);
    this.updateState();
  }

  handlePaste = (e: React.ClipboardEvent)=>{
    // The below line is a workaround where chrome will insert a span into a new line which becomes inaccessable
    // This will be replaced with better cleanup logic
    setTimeout(() => {
      const state = makeState(this.textAreaRef.current);
      this.textAreaRef.current.innerHTML='';
      applyStateToTextArea(state,this.textAreaRef.current);
    },5)
    const stringToHTML = function (str: string) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    console.log(str,dom)
    return dom;
  };
    console.log(e);
    const el = stringToHTML(e.clipboardData.getData('text/html'));
    console.log(el.childNodes);
    console.log(Array.from(el.childNodes).reduce<Array<any>>((acc: Array<any>, el: any) => {
      if(!el.tagName) return acc;
      const tag = el.tagName.toLowerCase();
      if(tag === 'span'){
        if(el.className.startsWith('Jazzs')) acc.push(el);
        else if(el.firstChild) acc.push(el.firstChild.data);
      }
      else if(tag === 'div' && el.childNodes.length !== 0) acc.push(el);
      return acc;
    }, []))
    console.log(el.childNodes);
  }

  render() {
    return (
      <div
        id="jazzy-ce-area"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
          //  e.preventDefault();
          //  document.execCommand('insertLineBreak')
        }}}
        contentEditable={!this.props.disabled}
        role="textbox"
        aria-label="textarea"
        tabIndex={0}
        onPaste={this.handlePaste}
        className={this.props.className}
        style={{ ...defaults, ...this.props.textareaStyle }}
        ref={this.textAreaRef}
      />
    );
  }
}

export default UnicodeTextArea;

export type {TextAreaState, VariableOptions};
