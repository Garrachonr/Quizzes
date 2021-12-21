import React from "react";
import { LangContext } from "./App";
import photo from "./image.png";
import photo2 from "./image2.png";
import "./mejoraCSS/Home.css";


export default function Home(props) {
    return <div id="main">
        <LangContext.Consumer>
            {(context) => {
                return <div>
                    <div className='TextInicio'>
                        <img className='photo2' src={photo2} />
                        <h1>Bienvenido a juegos online 24h 777</h1>
                        <h1>Navega hasta el juego que quieras</h1>
                        <h1>Disfruta!</h1>
                        <img className='photo1' src={photo} />
                    </div>
                </div>
            }
            }
        </LangContext.Consumer>
    </div>
}