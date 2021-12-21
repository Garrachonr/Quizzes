import React, { useState, useEffect } from 'react';
import Game from './Game';
import Timer from './timer';
import { quizzes } from "./mock-data";
import { LangContext } from "./App";
import { useContext } from "react";
import photo from './image2.png';
import './mejoraCSS/Quiz.css';

export default function Quiz(props) {

    const timer = 60
    const [resp0, setResp0] = useState("");
    const [resp1, setResp1] = useState("");
    const [resp2, setResp2] = useState("");
    const [resp3, setResp3] = useState("");
    const [resp4, setResp4] = useState("");
    const [resp5, setResp5] = useState("");
    const [resp6, setResp6] = useState("");
    const [resp7, setResp7] = useState("");
    const [resp8, setResp8] = useState("");
    const [resp9, setResp9] = useState("");

    const [result, setResult] = useState(0);
    const [percent, setPercent] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [quizzess, setQuizzess] = useState(quizzes);
    const [finished, setFinished] = useState(0);
    const [answer, setAnswer] = useState("");
    const [ended, setEnded] = useState(0);
    const [count, setCount] = useState(timer);
    const [flag, setFlag] = useState(true);

    //mostrar lo que se va escribiendo
    function escribiendo(text) {
        setAnswer(text);
        switch (currentQuiz) {
            case 0:
                setResp0(text)
                return
            case 1:
                setResp1(text)
                return
            case 2:
                setResp2(text)
                return
            case 3:
                setResp3(text)
                return
            case 4:
                setResp4(text)
                return
            case 5:
                setResp5(text)
                return
            case 6:
                setResp6(text)
                return
            case 7:
                setResp7(text)
                return
            case 8:
                setResp8(text)
                return
            case 9:
                setResp9(text)
                return
        }

    }
    //termina el timer
    function end(num) {
        if (num == 0 || num < 0) {
            comprobar();
            setEnded(1);
        }
    }
    //Nos bajamos los quizzes
    useEffect(() => {
        fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=769e57d6fcb84b970fcc")
            .then(res => res.json())
            .then(json => { setQuizzess(json) })
        setTimeout(() => {
            setFlag(false);
        }, 500)
    }, []);

    //comprobamos la respuesta
    function comprobar() {
        let x = 0;

        if (resp0.trim().toLocaleLowerCase() == quizzess[0].answer.trim().toLocaleLowerCase()) { x++ }
        if (resp1.trim().toLocaleLowerCase() == quizzess[1].answer.trim().toLocaleLowerCase()) { x++ }
        if (resp2.trim().toLocaleLowerCase() == quizzess[2].answer.trim().toLocaleLowerCase()) { x++ }
        if (resp3.trim().toLocaleLowerCase() == quizzess[3].answer.trim().toLocaleLowerCase()) { x++ }
        if (resp4.trim().toLocaleLowerCase() == quizzess[4].answer.trim().toLocaleLowerCase()) { x++ }
        if (resp5.trim().toLocaleLowerCase() == quizzess[5].answer.trim().toLocaleLowerCase()) { x++ }
        if (resp6.trim().toLocaleLowerCase() == quizzess[6].answer.trim().toLocaleLowerCase()) { x++ }
        if (resp7.trim().toLocaleLowerCase() == quizzess[7].answer.trim().toLocaleLowerCase()) { x++ }
        if (resp8.trim().toLocaleLowerCase() == quizzess[8].answer.trim().toLocaleLowerCase()) { x++ }
        if (resp9.trim().toLocaleLowerCase() == quizzess[9].answer.trim().toLocaleLowerCase()) { x++ }
        setResult(x);
        setEnded(1);
        setPercent(x * 10)

    }
    //avanzamos de pregunta
    function Siguiente() {
        if (currentQuiz != quizzess.length - 1) {
            setCurrentQuiz(currentQuiz + 1);
            setFinished(0);
            switch (currentQuiz) {
                case 0:
                    setAnswer(resp0)
                    return
                case 1:
                    setAnswer(resp1)
                    return
                case 2:
                    setAnswer(resp2)
                    return
                case 3:
                    setAnswer(resp3)
                    return
                case 4:
                    setAnswer(resp4)
                    return
                case 5:
                    setAnswer(resp5)
                    return
                case 6:
                    setAnswer(resp6)
                    return
                case 7:
                    setAnswer(resp7)
                    return
                case 8:
                    setAnswer(resp8)
                    return
                case 9:
                    setAnswer(resp9)
                    return
            }
        }
    }
    //retrocedemos 
    function Anterior() {
        setCurrentQuiz(currentQuiz - 1);
        setFinished(0);
        switch (currentQuiz) {
            case 0:
                setAnswer(resp0)
                return
            case 1:
                setAnswer(resp1)
                return
            case 2:
                setAnswer(resp2)
                return
            case 3:
                setAnswer(resp3)
                return
            case 4:
                setAnswer(resp4)
                return
            case 5:
                setAnswer(resp5)
                return
            case 6:
                setAnswer(resp6)
                return
            case 7:
                setAnswer(resp7)
                return
            case 8:
                setAnswer(resp8)
                return
            case 9:
                setAnswer(resp9)
                return
        }
    }

    //restauramos todo
    function Reset() {
        setResult(0);
        setResp0("");
        setResp1("");
        setResp2("");
        setResp3("");
        setResp4("");
        setResp5("");
        setResp6("");
        setResp7("");
        setResp8("");
        setResp9("");
        setAnswer("");
        setCurrentQuiz(0);
        setFinished(0);
        setEnded(0);
        setCount(timer)
        fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=769e57d6fcb84b970fcc")
            .then(res => res.json())
            .then(json => { setQuizzess(json) })
        setTimeout(() => {
            setFlag(false);
        }, 500)
    }

    function anex(num, resp) {
        setCurrentQuiz(num);
        setAnswer(resp);
    }

    //MEJORA OPCIONAL TECLA ENTER
    function teclaEnter() {
        if (currentQuiz == 9) {
            comprobar()
        } else {
            Siguiente();
        }


    }

    if ((finished == 1 & currentQuiz == quizzess.length - 1) || (ended == 1)) {
        return (
            <LangContext.Consumer>{(context) => {
                return <div>
                    <div>
                        <h1>{context.dictionary["Desp"]}</h1>
                        <h2>{context.dictionary["Ed"]} {result}</h2>
                        <h3>{context.dictionary["Per"]} {percent}%</h3>

                    </div>

                </div>
            }
            }
            </LangContext.Consumer>
        );
    }
    return (
        <LangContext.Consumer>{(context) => {
            return <div>
                <h1>Pagina de juegos</h1>
                {flag ? <img src={photo}></img> : <div className='general'>
                    {answer}
                    <nav className='buttons' roles="tablist">
                        <button disabled={finished == 1 & currentQuiz == quizzess.length - 1} onClick={() => anex(0, resp0)}>1</button>
                        <button disabled={finished == 1 & currentQuiz == quizzess.length - 1} onClick={() => anex(1, resp1)}>2</button>
                        <button disabled={finished == 1 & currentQuiz == quizzess.length - 1} onClick={() => anex(2, resp2)}>3</button>
                        <button disabled={finished == 1 & currentQuiz == quizzess.length - 1} onClick={() => anex(3, resp3)}>4</button>
                        <button disabled={finished == 1 & currentQuiz == quizzess.length - 1} onClick={() => anex(4, resp4)}>5</button>
                        <button disabled={finished == 1 & currentQuiz == quizzess.length - 1} onClick={() => anex(5, resp5)}>6</button>
                        <button disabled={finished == 1 & currentQuiz == quizzess.length - 1} onClick={() => anex(6, resp6)}>7</button>
                        <button disabled={finished == 1 & currentQuiz == quizzess.length - 1} onClick={() => anex(7, resp7)}>8</button>
                        <button disabled={finished == 1 & currentQuiz == quizzess.length - 1} onClick={() => anex(8, resp8)}>9</button>
                        <button disabled={finished == 1 & currentQuiz == quizzess.length - 1} onClick={() => anex(9, resp9)}>10</button>
                    </nav>
                    <div className='timer'>
                        <Timer end={end} count={count} setCount={setCount} />
                    </div>
                    <Game quiz={quizzess[currentQuiz]} teclaEnter={teclaEnter} escribiendo={escribiendo} finished={finished} answer={answer} comprobar={comprobar} Next={Siguiente} />
                    <br />
                    <button onClick={() => comprobar()}>
                        {context.dictionary["Submit"]}
                    </button>
                    <button disabled={currentQuiz == 0} onClick={() => Anterior()}>
                        {context.dictionary["Previous"]}
                    </button>
                    <button disabled={currentQuiz == quizzess.length - 1} onClick={() => Siguiente()}>
                        {context.dictionary["Next"]}
                    </button>
                    <button onClick={() => Reset()}>{context.dictionary["Reset"]}</button>
                </div>}
            </div>

        }
        }

        </LangContext.Consumer>

    );


}