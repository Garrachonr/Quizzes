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
                        <h1>{context.dictionary["First"]}</h1>
                        <h1>{context.dictionary["Second"]}</h1>
                        <h1>{context.dictionary["Third"]}</h1>
                        <img className='photo1' src={photo} />
                    </div>
                </div>
            }
            }
        </LangContext.Consumer>
    </div>
}