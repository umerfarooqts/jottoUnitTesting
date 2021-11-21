import React from "react";
import PropTypes from "prop-types";

function Input({success, secretWord}){
    // Note:
    // Since we want to mock useState, we cannot destructure it.
    // Hence we will use React.useState() here.

    const handleSubmit = (event)=> {
        event.preventDefault();
    }
    const [currentGuess, setCurrentGuess] = React.useState("");
    // If the game is finished or success=true,
    // We don't need to print out the form
    if (success){
        return <div data-test={'component-input'}/>
    }

    return (
        <div data-test={'component-input'}>
            <form className={"form-inline"} onSubmit={handleSubmit}>
                <input
                    data-test={"input-box"}
                    className={"mb-2 mx-sm-3"}
                    type={"text"}
                    placeholder={"Enter Guess"}
                    value={currentGuess}
                    onChange={e => setCurrentGuess(e.target.value)}
                />
                <button
                    data-test={"submit-button"}
                    className={"btn btn-primary mb-2"}

                    onClick={(event)=> {
                        event.preventDefault();
                        setCurrentGuess("")}
                    }
                >
                    Submit
                </button>

            </form>
        </div>
    );
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
};

export default Input;

