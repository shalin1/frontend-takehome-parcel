import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders a hello world header', () => {
        expect(app.find('h1').exists()).toBe(true);
        expect(app.text()).toMatch(/Hello World/)
    });
});
