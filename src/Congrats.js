import React from "react";

/**
 * Functional React Component for Congrulatory Message
 * @function
 * @returns {JSX.Element} - Rendered Component
 */

export default (props) => {
    if (props.success)
        return(
            <div data-test={"component-congrats"}>
                <span data-test={"component-message"}>
                    Congratulations! You guessed the Word!!!
                </span>
            </div>
        );
    else
        return(<div data-test={"component-congrats"} />);
}