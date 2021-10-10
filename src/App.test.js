/* Functional Tests
 * True testing of the behavior - Independent of shared state implementation
 * The only change will be in the setup function
 * It is important to know how to apply the initial state
 * Initial State can contain props like success, secretWord, guessedWords
 * Method for storing is different for Redux vs React Context
 */

import { shallow } from 'enzyme';
import { findByTestAttr } from "../test/testUtil";
import React from "react";
import App from './App';

/**
 * Setup function for App component
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />)
}


test('Renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});





