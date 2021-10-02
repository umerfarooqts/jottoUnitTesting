import React from "react";
import { shallow } from 'enzyme';

import {checkProps, findByTestAttr} from "../test/testUtil";
import Input from "./Input";


const defaultProps = {
    secretWord: 'abc123',
    success: false
}

/**
 * Setup function for app component
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Input {...setupProps }/>);
}

test ('Input renders without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
})

test('Does not throw any warnings with the expected props', ()=>{
    checkProps(Input, defaultProps);
});

// Example of Mocking
describe('State Controlled Input field', ()=>{
    let mockSetCurrentGuess = jest.fn(); //Not required if Method 2 is used
    let wrapper;

    // This variable will keep the orignal function without Mocking
    // So incase you also want to use the original version of the function
    // you over-ride it everytime
    let originalUseState;
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();   // Will clear the data before every test
        originalUseState = React.useState; // Storing the orignal value of React.useState;
        // Whenever React.useState function is called during the test, it will return two things
        // ""                  --> Empty String
        // mockSetCurrentGuess --> A Mocked Function.
        React.useState = jest.fn(()=> ["", mockSetCurrentGuess]); //Not required if Method-2 is used
        wrapper = setup();
    })

    afterEach(()=>{
        // Since the test would be complete at this point,
        // We may want to use the orignal function instead of mocked function
        // So replacing the mocked function with original function
        React.useState = originalUseState;
    })

    test('State Update happens when the value if Input box changes', ()=>{
        const inputBox = findByTestAttr(wrapper, 'input-box');
        // We will create a mock event that will mock the change event of inputbox
        //The following code will simulate the change event by writing train inside
        const mockEvent = {target: { value: 'train'}};

        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    test('Check if the inputbox is cleared after the submit button is pressed', ()=>{
        const submitBtn = findByTestAttr(wrapper, 'submit-button');

        //Since this doesn't know about preventDefaults, we pass a dummy event
        submitBtn.simulate("click", {preventDefault() {}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
})

describe('render', ()=>{
    describe('Success is True', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup({success: true});
        });

        test('Input renders without error', ()=>{
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        test('On Success, Inputbox should not be visible', ()=>{
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false);
        });

        test('On Success, Submit button should not be visible', ()=>{
            const submitBtn = findByTestAttr(wrapper, 'submit-button');
            expect(submitBtn.exists()).toBe(false);
        });

    });

    describe('Success is False', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup({success: false});
        });

        test('Input renders without error', ()=>{
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        test('On Not Success, Inputbox should be visible', ()=>{
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        });

        test('On Not Success, Submit button should be visible', ()=>{
            const submitBtn = findByTestAttr(wrapper, 'submit-button');
            expect(submitBtn.exists()).toBe(true);
        });

    });
})


// Method-2
// To Mock a function when it is used as destructured code. This is what is required.

/*
const mockSetCurrentGuess = jest.fn();

jest.mock('react', ()=> ({
    ...jest.requireActual('react')
    useState: (initialState) => [initialState, mockSetCurrentGuess]
}));
*/

// What if you have multiple useState,
// -- Option 1: useReducers
// -- Option 2: Skip the unit tests and go straight to functional test