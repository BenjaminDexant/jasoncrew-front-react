import React from 'react';

import "./App.css";

import AddArgonauteForm from './components/addArgonauteForm/AddArgonauteForm';
import ArgonautesList from "./components/argonautesList/ArgonautesList";

const proxy = "https://jasoncrew-back-node.herokuapp.com/";

const App = () => {
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
      <AddArgonauteForm proxy={proxy} />
      <ArgonautesList proxy={proxy} />
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
