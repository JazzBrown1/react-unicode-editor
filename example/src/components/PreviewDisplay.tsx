import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const PreviewDisplay = (
  { heading, text }: { heading:string, text:string},
) => (
  <Jumbotron
    className="pt-4"
    style={{
      whiteSpace: 'pre-wrap',
    }}
  >
    <h4>{heading}</h4>
    {text}
  </Jumbotron>
);

export default PreviewDisplay;
