/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import ContextMenu, { createBridge } from 'react-context-menu-hooks';

interface props {
  redo: () => void,
  undo: () => void,
  paste: () => void,
  canUndo: boolean,
  canRedo: boolean
}

export const contextMenuBridge = createBridge({});

const ContextMenuComponent = ({
  redo, undo, canUndo, canRedo, paste,
} : props) => {
  const darkMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <ContextMenu bridge={contextMenuBridge} dark={darkMode}>
      <ContextMenu.Option
        disabled={!canUndo}
        onClick={undo}
      >
        Undo
      </ContextMenu.Option>
      <ContextMenu.Option
        disabled={!canRedo}
        onClick={redo}
      >
        Redo
      </ContextMenu.Option>
      <ContextMenu.Divider />
      <ContextMenu.Option
        onClick={() => { document.execCommand('cut'); }}
      >
        Cut
      </ContextMenu.Option>
      <ContextMenu.Option
        onClick={() => { document.execCommand('copy'); }}
      >
        Copy
      </ContextMenu.Option>
      <ContextMenu.Option
        onClick={paste}
      >
        Paste
      </ContextMenu.Option>
    </ContextMenu>
  );
};

export default ContextMenuComponent;
