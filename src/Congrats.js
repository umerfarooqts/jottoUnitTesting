import React from "react";
import PropTypes from 'prop-types';

/**
 * Functional React Component for Congrulatory Message
 * @function
 * @returns {JSX.Element} - Rendered Component
 */

export const Congrats = (props) => {
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

//We define all the proptypes in the following objects
Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}