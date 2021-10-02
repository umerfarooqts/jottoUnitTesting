import React from "react";
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    let contents;
    if (props.guessedWords.length === 0){
        contents = (
            <span data-test="guess-instructions">Try to guess the Secret Word!</span>
        );
    }
    else {
        const guessWordsRows = props.guessedWords.map((word, index)=>{
            return (
                <tr data-test="guessed-word" key={index}>
                    <td>{word.guessedWord}</td>
                    <td>{word.letterMatchCount}</td>
                </tr>
            )
        })
        contents = (
            <div data-test="guessed-words">
                <h1>Guessed Words</h1>
                <table className="table table-sm">
                    <thead className="thead-light">
                    <tr>
                        <th>Guess</th>
                        <th>Matching Letters</th>
                    </tr>
                    </thead>
                    <tbody>
                        {guessWordsRows}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div data-test="component-guessed-word">
            {contents}
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default GuessedWords;