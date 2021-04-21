import React from 'react';

import Argonaute from './Argonaute';

import './styles/argonautesList.css';

const ArgonautesList = ({ argonautesList }) => {
  return (
    <div className="argonautesList-container">
      {argonautesList.map((data, index) => (
        <Argonaute
          id={data._id}
          name={data.name}
          key={data._id}
        />
      ))}
    </div>
  );
};

export default ArgonautesList;
