import { LangContext } from "./App";
import { useContext } from "react";
import React, { useState, useEffect } from 'react';
import quizimg from './quiz.jpeg';
export default function Game(props) {
    //sacamos el lang del context para traducir
    // const lang = useContext(LangContext);
    // const [foto1, setFoto1] = useState();

    //MEJORA OPCIONAL TECLA ENTER
    const handlePressKey = (event) => {
        if (event.key === "Enter") {
            props.teclaEnter();
        }
    }

    const escribiendo = (event) => {
        props.escribiendo(event.target.value);
    }


    return (
        <div>
            <LangContext.Consumer>
                {(context) => {
                    return <div>
                        <img id="fpregunta" src={(props.quiz.attachment !== null) ? props.quiz.attachment.url : quizimg} />
                        <br />
                        {props.quiz.question}
                        <br />
                        <div id="autor">
                            {props.quiz.author.username == null ? context.dictionary["Ano"] : props.quiz.author.username}
                        </div>
                        <br />
                        <input type="text" id="respuesta" placeholder={context.dictionary["Answer"]} value={props.answer} onKeyDown={handlePressKey} onChange={escribiendo} ></input>
                        <br />
                        <br />

                        <div>
                            <img id="fautor" src={(props.quiz.author.photo.url !== null) ? props.quiz.author.photo.url : quizimg} />
                        </div>
                    </div>

                }
                }

            </LangContext.Consumer>
        </div>
    );
}