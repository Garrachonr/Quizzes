import "./mejoraCSS/App.css";
import React, { useState, useEffect } from 'react';
import Quiz from './Quiz.js';
import Tictactoe from './Tictactoe.js';
import Home from './Home.js';
import SelectorIdioma from "./SelectorIdioma";
import { Routes, Route, NavLink } from "react-router-dom";
//importamos idiomas
import esp from "./idioma/esp.json";
import en from "./idioma/en.json"

//Hacemos un diccionario con los dos json
const languages = { en, esp };

export const LangContext = React.createContext({ userLang: "esp", dictionary: esp });

export default function App() {
  const [lang, setLang] = useState("en");
  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  }

  return (
    <div>
      <LangContext.Provider value={{ handleLanguageChange: handleLanguageChange, userLang: lang, dictionary: languages[lang] }}>
        <div className="Language">
          <SelectorIdioma />
        </div>


        <LangContext.Consumer>
          {(context) => {
            return <div>
              <header className="Titulo">
                {context.dictionary["Title"]}
              </header>
              <div className="space">
                .
              </div>
              <nav className='nav nav' roles="tablist">
                <NavLink to="/">{context.dictionary["Home"]}</NavLink>
                <NavLink to="/tictactoe">{context.dictionary["Tictactoe"]}</NavLink>
                <NavLink to="/quiz">{context.dictionary["Quiz"]}</NavLink>
              </nav>
            </div>
          }}
        </LangContext.Consumer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tictactoe" element={<Tictactoe />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </LangContext.Provider>
    </div>
  );
}