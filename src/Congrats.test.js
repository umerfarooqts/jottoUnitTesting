import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../test/testUtil';
configure({ adapter: new Adapter() });

import Congrats from "./Congrats";


/**
 * Factory Function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    return shallow(<Congrats {...props}/>);
}

test('Render Congrats Component Without Any Difficulty', ()=> {
    const wrapper   = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('Render Congrats - Empty Text Because "success" prop is false', ()=> {
    const wrapper   = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('Render Congrats - Congratulation Text Because "success" prop is false', ()=> {
    const wrapper   = setup({success: true});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text().length).not.toBe(0);
});