import React from 'react';
import {Congrats} from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import Input from "./components/Input";

function App() {
    /*const guessWordTemp = [
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'party', letterMatchCount: 5}
    ]*/
    // TODO: Get the props from shared state
    const success = false;
    const secretWord = 'party';
    const guessedWords = [];

    return (
        <div data-test="component-app" className="container">
            <h1>Jotto Application</h1>
            <Congrats success={success} />
            <Input secretWord={secretWord}/>
            <GuessedWords guessedWords={guessedWords}/>

        </div>
    );
}

export default App;
