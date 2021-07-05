# react-unicode-editor

React Unicode Editor is a react editor component that includes unicode formatting and insertable variables.

The primary usecase for this component is for marketing apps that target social media, push and text message communications.

This component works on all modern browsers, but does not support Internet Explorer!

### Usage

```jsx
const App = () => {
  const [disabled, setDisabled] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [unicodeState, setUnicodeState] = useState([]);
  const unicodeEditorRef = useRef(null);

  return (
    <ReactUnicodeEditor
      startValue={unicodeState}
      onChange={() => { setUnicodeState(state) }}
      ref={unicodeEditorRef}
      textareaStyle={{ minHeight: 100, backgroundColor: 'blue' }}
      disabled={disabled}
    />
  )
}
```

### Project State

Currently the component is fully functioning with one small issue

- Adding a variable blocks and formatting text does not add to the browser undo stack

Basicly, the the exec commands don't work well, it is buggy and is inconsistent and across browsers, this has been implemented without ecec command, but exec command is the only way for it to add to the browser undo stack.

This chrome bug has caused most of my woes :( https://bugs.chromium.org/p/chromium/issues/detail?id=258512

I have implemented exec command functions, formatting works on chrome and edge, but adding variables creates very buggy behavior.

Possible resolutions are:

- Try to manipulate execCommand to make it work (Hack and add and removing elements to stop the buggy behaviour)
- Implement a custom undo stack - This is totally possible .... But it kind of goes against my project goals.

Exec command are flagged to be deprecated with some proposals for its replacement. This is edging me towards creating a custom undo stack. While its more effort it is less hacky.

Please feel free to contribute.