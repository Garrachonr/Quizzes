import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-bootstrap';
import Tictac from './Tictactoe.js';
//Hay que hacer el diccionario
// import es from "./lang/es.json";

export const LangContext = React.createContext({ userLang: "es", dictionary: es });

export default function App(props) {
  const [lang, setLang] = useState("en");
  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  }

  return (
    <div>
      <LangContext.Provider value={{ handleLanguageChange: handleLanguageChange, userLang: lang, dictionary: dictionaryList[lang] }}>
        <LangContext.Consumer>
          {(context) => {
            return
            <div>
              <nav className='nav nav-tabs' roles="tablist">
                <NavLink to="/">TicTacToe</NavLink>
                <NavLink to="/tictactoe">TicTacToe</NavLink>
                <NavLink to="/quiz">Quiz</NavLink>
              </nav>
            </div>
          }}
        </LangContext.Consumer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </LangContext.Provider>
    </div>
  );











}