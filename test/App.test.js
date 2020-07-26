import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios'
import App from '../src/App';
import SearchInput from '../src/components/SearchInput';

describe('App', () => {
    const app = shallow(<App />);
    it('renders', () => {
        expect(app.exists()).toBe(true)
    })

    it('has not changed from the last snapshot', () => {
        const tree = renderer.create(app).toJSON();
        expect(tree).toMatchSnapshot();
    })

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

    describe('calling the API', ()=>{
        beforeEach(()=>{
            const gems = [{"name": "fukuzatsu"},{"name": "uz"}]
            const res = [{ data: gems }]
            jest.mock('axios')
            axios.get.mockImplementation(() => Promise.resolve(res))
        })
        describe('when the search input has not been updated', () => {
            it('does not call our API', ()=>{
                mount(<App/>)
                expect(axios).not.toHaveBeenCalled()
            })
        })
        describe('when the search input has been updated', () => {
            it('calls our API to search for some Ruby Gems', () => {
                const wrapper = mount(<App/>)
                wrapper.find('input').simulate('change', { target: { value: 'new value' } })

            })
        })

    })
});
