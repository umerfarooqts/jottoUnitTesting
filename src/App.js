import React from 'react';
import './App.css';
import {Congrats} from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

function App() {
    const guessWordTemp = [
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'party', letterMatchCount: 5}
    ]

    return (
        <div className="container">
            <h1>Jotto Application</h1>
            <Input secretWord={"abc123"}/>
            <Congrats success={true} />
            <GuessedWords guessedWords={guessWordTemp}/>

        </div>
    );
}

export default App;
