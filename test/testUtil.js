import checkPropTypes from 'check-prop-types';

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper to search within
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Test the Components if it passes the certain Proptypes provided by conformingProps
 * @function checkProps
 * @param {component} React Component - The component on which the PropTest has to be made
 * @param {conformingProps} Props - Props that needs to be satisfied
 * @returns
 */

export const checkProps = (component, conformingProps)=>{
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name, '');
    expect(propError).toBeUndefined();
}