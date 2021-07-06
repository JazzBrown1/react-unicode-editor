import React, { Component, RefObject } from 'react';

interface VariableOptions {
    code: string;
    inputText: string;
    previewText: string;
    styles?: string;
    format?: string;
}
declare type EditorState = Array<VariableOptions | string>;

interface Props {
    onChange: Function;
    startValue?: EditorState;
    textareaStyle?: React.CSSProperties;
    disabled?: boolean;
    className?: string;
    throttle?: boolean;
    throttleInterval?: number;
}
declare class UnicodeTextArea extends Component {
    static defaultProps: {
        textareaStyle: {};
        disabled: boolean;
        className: string;
        throttle: boolean;
        throttleInterval: number;
        startValue: never[];
    };
    props: Props;
    editorRef: RefObject<HTMLDivElement>;
    throttling: boolean;
    shouldUpdate: boolean;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handlePaste: () => void;
    isFocused(): boolean;
    format(format: string): void;
    updateState: () => void;
    throttle: () => void;
    refresh: () => void;
    addVariable(options: VariableOptions): void;
    addText(text: string): void;
    render(): JSX.Element;
}

export default UnicodeTextArea;
export { EditorState, VariableOptions };
