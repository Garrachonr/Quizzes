import { LangContext } from "./App";
import { useContext } from "react";
import React, { useState, useEffect } from 'react';
import photo from './image2.png';
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
                        <img id="fpregunta" src={props.quiz.attachment.url == null ? photo : props.quiz.attachment.url} />
                        {props.quiz.question}
                        <br />
                        <div id="autor">
                            {props.quiz.author.username == null ? context.dictionary["Ano"] : props.quiz.author.username}
                        </div>
                        <br />
                        <input type="text" id="respuesta" placeholder={context.dictionary["Answer"]} value={props.answer} onKeyDown={handlePressKey} onChange={escribiendo} ></input>
                        <br />

                        <div>
                            <img id="fautor" src={props.quiz.author.photo.url == null ? photo : props.quiz.author.photo.url} />
                        </div>
                    </div>

                }
                }

            </LangContext.Consumer>
        </div>
    );
}