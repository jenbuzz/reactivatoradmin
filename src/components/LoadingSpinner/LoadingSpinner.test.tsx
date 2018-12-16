import React from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinner from './LoadingSpinner';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoadingSpinner />, div);
    ReactDOM.unmountComponentAtNode(div);
});
