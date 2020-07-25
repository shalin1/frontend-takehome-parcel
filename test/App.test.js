import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import SearchInput from '../src/components/SearchInput';

describe('App', () => {
    const app = shallow(<App />);

    it('renders a hello world header', () => {
        expect(app.find('h1').exists()).toBe(true);
        expect(app.text()).toMatch(/Hello World/)
    });

    it('renders a single search input', () => {
        const input = app.find(SearchInput)
        expect(input.length).toBe(1);
    })

    it('passes the correct props to the search input', () => {
        const input = app.find(SearchInput)
        expect(input.props()).toEqual({onChange: expect.any(Function), value: ''})
    })

    it("persists changes to the input's value", () => {
        const wrapper = mount(<App/>)
        wrapper.find('input').simulate('change', { target: { value: 'new value' } })
        expect(wrapper.find('input').props().value).toBe('new value')
    })
});
