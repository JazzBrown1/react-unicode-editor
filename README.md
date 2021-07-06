# react-unicode-editor

React Unicode Editor is a react editor component that includes unicode formatting and variables blocks.

The primary use case for this component is for marketing apps that target social media, push and text message communications.

This component works on all modern browsers, but does not support Internet Explorer!

## [Check out the demo!](https://jazzbrown1.github.io/react-unicode-editor/)

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
      onChange={(state) => { setUnicodeState(state) }}
      ref={unicodeEditorRef}
      textareaStyle={{ minHeight: 100, backgroundColor: 'blue' }}
      disabled={disabled}
      throttle
      throttleInterval={300}
    />
  )
}
```

Please see the example for full usage.

#### This library is still in development and there are some known issues - If you find any more please raise on the issues page on github.