import React, { Component, RefObject } from 'react';

interface VariableOptions {
    code: string;
    inputText: string;
    previewText: string;
    style?: React.CSSProperties | string;
    format?: string;
    className?: string;
}
declare type EditorState = Array<VariableOptions | string>;

declare class UndoStack {
    stack: Array<any>;
    offset: number;
    current: number;
    constructor(initialState?: any);
    clear(initialState: any): void;
    replace(state: any): void;
    add(state: any): void;
    allowedForward(): boolean;
    forward(): boolean | any;
    allowedBack(): boolean;
    back(): boolean | any;
    getState(): any;
}

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
    disableDrag?: boolean;
}
declare class ReactUnicodeEditor extends Component {
    static defaultProps: {
        style: {};
        disabled: boolean;
        className: string;
        debounce: boolean;
        debounceInterval: number;
        startValue: never[];
        disableContextMenu: boolean;
        onContextMenu: null;
        undoStackReference: undefined;
        variableStyle: undefined;
        disableDrag: boolean;
    };
    props: Props;
    editorRef: RefObject<HTMLDivElement>;
    debouncing: boolean;
    shouldUpdate: boolean;
    history: UndoStack;
    debounceTimer: number | null;
    shouldAddHistory: boolean;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private pasteHandler;
    private inputHandler;
    private keydownHandler;
    private updateState;
    private debounce;
    private isFocused;
    canUndo: () => boolean;
    undo: () => void;
    paste: () => void;
    canRedo: () => boolean;
    redo: () => void;
    format: (format: string) => void;
    refresh: () => void;
    addVariable: (options: VariableOptions) => void;
    addText: (text: string) => void;
    private onDrop;
    private onContextMenu;
    render(): JSX.Element;
}

declare const format: (text: string, font: string) => string;

export { EditorState, UndoStack, VariableOptions, ReactUnicodeEditor as default, format as formatText };
