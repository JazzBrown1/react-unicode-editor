import React from 'react';
import {
  Button,
} from 'react-bootstrap';

interface props {
  mounted: boolean;
  setMounted :Function;
  disabled :boolean;
  setDisabled :Function;

}

const DemoButtons = ({
  mounted, setMounted, disabled, setDisabled,
}: props) => (
  <>
    <Button
      className="mr-1"
      onClick={() => {
        setMounted(!mounted);
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      as="div"
    >
      {mounted ? 'Unmount' : 'Mount'}
    </Button>
    <Button
      className="mr-1"
      onClick={() => {
        setDisabled(!disabled);
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      as="div"
    >
      {disabled ? 'Enable' : 'Disable'}
    </Button>
  </>
);

export default DemoButtons;
