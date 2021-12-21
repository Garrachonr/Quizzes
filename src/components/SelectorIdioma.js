import { LangContext } from "./App";

export default function SelectorIdioma(props) {
    return <LangContext.Consumer>
        {(context) => {
            return <select value={context.userLang} onChange={context.handleLanguageChange} >
                <option key="en" value="en">{context.dictionary["en"]}</option>
                <option key="esp" value="esp">{context.dictionary["esp"]}</option>
            </select>
        }
        }
    </LangContext.Consumer>
}