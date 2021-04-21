import React from 'react';

import './styles/argonaute.css';

const Argonaute = ({id, name}) => {

  return (
    <button
      className="argonaute-button"
      name="argonaute"
      type="button"
      >
      {name}
    </button>
  );
};

export default Argonaute;
