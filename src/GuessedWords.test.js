import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, checkProps} from "../test/testUtil";
import GuessedWords from "./GuessedWords";



const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
}

/**
 * Factory Function to create a ShallowWrapper for the GuessWord Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>);
}

//Note: This is not working for some reasons.
test('Does not throw any warnings with the expected props', ()=>{
    checkProps(GuessedWords, defaultProps);
})

describe('If there are no words guessed', ()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessedWords: []})
    })
    test('Renders without error', ()=>{
        const component = findByTestAttr(wrapper, 'component-guessed-word');
        expect(component.length).toBe(1);
    })

    test('Renders instructions to guess a word', ()=>{
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    })
})

describe('If there are words guessed', ()=>{
    const guessedWords = [
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'party', letterMatchCount: 5}
        ]

    let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessedWords})
    });


    test('Renders without error', ()=>{
        const component = findByTestAttr(wrapper, 'component-guessed-word');
        expect(component.length).toBe(1);
    })
    test('Renders guessed words section', ()=>{
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    })
    test('Correct number of guessed words', ()=>{
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    })
})
