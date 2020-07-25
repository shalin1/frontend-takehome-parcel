import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);
import SearchInput from '../../src/components/SearchInput';

describe('SearchInput', () => {
    const onChange = jest.fn()
    const props = { value: 'initial value', onChange }
    const wrapper = shallow(<SearchInput {...props} />)
    const input = wrapper.find('input')

    it('renders', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('has not changed from the last snapshot', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('has no programmatically detectable a11y issues', async () => {
        const results = await axe(wrapper.html());
        expect(results).toHaveNoViolations();
    })

    it('renders a label', () => {
        const label = wrapper.find('label')
        expect(label.exists()).toBe(true)
        expect(label.text()).toBe('Search')
    })

    it('renders an input element with the expected placeholder', () => {
        expect(input.exists()).toBe(true);
        expect(input.props().placeholder).toBe('Search Gems...')
    });

    it('sets the value of the input element to the value prop', () => {
        expect(input.props().value).toBe('initial value')
    })

    describe('when the input is updated',()=>{
        it('calls the onChange hook with the updated value', () => {
            const event = {target:{value:'updated value'}}
            input.simulate('change',event);

            expect(onChange).toHaveBeenCalledWith('updated value')
        })
    })
});
