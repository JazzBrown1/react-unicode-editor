import React from 'react';
import { Button } from 'react-bootstrap';

interface props {
  undo: Function;
  redo: Function;
}

const HistoryButtons = ({ undo, redo }: props) => (
  <>
    <Button
      className="mr-1 mb-2 float-right"
      variant="outline-primary"
      onClick={() => {
        undo();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      as="div"
    >
      Undo
    </Button>
    <Button
      className="mr-1 mb-2 float-right"
      variant="outline-primary"
      onClick={() => {
        redo();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      as="div"
    >
      Redo
    </Button>
  </>
);

export default HistoryButtons;
