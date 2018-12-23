import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('<Navigation />', () => {
    it('renders without crashing', () => {
        shallow(<Navigation />);
    });
});
