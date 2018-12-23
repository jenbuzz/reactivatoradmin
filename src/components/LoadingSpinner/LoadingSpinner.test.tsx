import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from './LoadingSpinner';

describe('<LoadingSpinner />', () => {
    it('renders without crashing', () => {
        shallow(<LoadingSpinner />);
    });
});
