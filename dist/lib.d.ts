import React, { Component } from 'react';

interface VariableOptions {
    code: string;
    inputText: string;
    previewText: string;
    styles?: string;
    format?: string;
}
declare type TextAreaState = Array<VariableOptions | string>;

interface Props {
    onChange: Function;
    startValue: TextAreaState;
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
    };
    textAreaRef: any;
    props: Props;
    listener: EventListener | null;
    throttling: boolean;
    shouldUpdate: boolean;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    isFocused(): boolean;
    format(format: string): void;
    updateState: () => void;
    throttle: () => void;
    refresh: () => void;
    addVariable(options: VariableOptions): void;
    addText(text: string): void;
    handlePaste: (e: React.ClipboardEvent) => void;
    render(): JSX.Element;
}

export default UnicodeTextArea;
export { TextAreaState, VariableOptions };
