import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Argonaute from './Argonaute';

import './styles/argonautesList.css';

const ArgonautesList = ({proxy}) => {
  const [argonautesList, setArgonautesList] = useState([]);
  useEffect(() => {
    axios
      .get(`${proxy}/argonautes`)
      .then((res) => res.data)
      .then((data) => setArgonautesList(data));
  }, [proxy]);

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
