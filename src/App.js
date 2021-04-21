import React, { useEffect, useState } from 'react';

import axios from 'axios';

import "./App.css";

import AddArgonauteForm from './components/addArgonauteForm/AddArgonauteForm';
import ArgonautesList from "./components/argonautesList/ArgonautesList";

const proxy = "https://jasoncrew-back-node.herokuapp.com";

const App = () => {
  const [argonautesList, setArgonautesList] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    axios
      .get(`${proxy}/argonautes`)
      .then((res) => res.data)
      .then((data) => setArgonautesList(data));
  }, [add, argonautesList]);

  return (
    <div>
      <header>
        <h1>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
      </header>
      <AddArgonauteForm proxy={proxy} add={add} setAdd={setAdd} />
      <ArgonautesList argonautesList={argonautesList} />
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
