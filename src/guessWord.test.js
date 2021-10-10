/* Functional Tests
 * True testing of the behavior - Independent of shared state implementation
 * The only change will be in the setup function
 * It is important to know how to apply the initial state
 * Initial State can contain props like success, secretWord, guessedWords
 * Method for storing is different for Redux vs React Context
 */

import React from "react";

// Since we are not going to do unit testing, we will need mount here.
// This is because we don't want to run our test in Isolation
// By using mount, we will get the state of the children as well.
import { mount } from 'enzyme';

import App from "./App";
import { findByTestAttr } from "../test/testUtil";

// The setup functions can be a bit different based on if we are using
// Redux or React Context

/**
 *  Create a wrapper with specified initial conditions
 *  then submit a guessed Word of 'train'
 *  @function
 *
 *  @param {object} state - Initial Conditions
 *  @returns {wrapper} - Enzyme Wrapper of mounted App Component
 */
const setup = (state = {}) => {
    // TODO: Apply State
    const wrapper = mount (<App />);

    // Add a value to inputbox
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', {target: { value: 'train' }});

    // Simulate click on submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });

    return wrapper;
}

describe.skip('No Words have been Guessed', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessWords: []
        })
    });

    test('Create a GuessWord table with one row', ()=>{
        const GuessWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(GuessWordRows).toHaveLength(1);
    });
});

describe.skip('Some Words have been Guessed', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessWords: [{guessedWord: 'agile', letterMatchCount: 1},
                {guessedWord: 'train', letterMatchCount: 3}]
        })
    });

    test('Create a GuessWord table with one row', ()=>{
        const GuessWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(GuessWordRows).toHaveLength(3);
    });
});

describe.skip('We Guessed the secret word', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessWords: [{guessedWord: 'agile', letterMatchCount: 1},
                {guessedWord: 'train', letterMatchCount: 3}]
        });

        // Now we simulate a trigger to the right secretWord
        const inputBox = findByTestAttr(wrapper, 'input-box');
        inputBox.simulate('change', {target: { value: 'party' }});
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() {} });
    });

    test('There should be the right number of rows', ()=>{
        const GuessWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(GuessWordRows).toHaveLength(3);
    });

    test('Congrats message should be displayed', ()=>{
        const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
        expect(congratsComponent).toHaveLength(1);
        expect(congratsComponent.text().length).toBeGreaterThan(0);
    });

    test('Input Component Should be hidden', ()=>{
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(inputBox.exists()).toBe(false);
        expect(submitButton.exists()).toBe(false);
    });


})