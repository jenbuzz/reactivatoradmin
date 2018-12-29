/**
 * DEPRECATED
 *
 * This test is kept as reference for testing without enzyme.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './../src/App';

describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
