import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Item item={{id: 1, name: 'Lorem ipsum', isactive: true, image: ''}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
