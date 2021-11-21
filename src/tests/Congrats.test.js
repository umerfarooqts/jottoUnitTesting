import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../test/testUtil';
import {Congrats} from "../components/Congrats";


/**
 * Factory Function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const defaultProps = {success:false}
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setupProps}/>);
}

test('Render Congrats Component Without Any Difficulty', ()=> {
    const wrapper   = setup({success: false});
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

//Note: This is not working for some reasons.
test("Doesn't throw warnings with expected props", ()=>{
    const expectedProps = {success: false};
    checkProps(Congrats, expectedProps);

})