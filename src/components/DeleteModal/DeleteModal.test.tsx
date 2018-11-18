import React from 'react';
import ReactDOM from 'react-dom';
import DeleteModal from './DeleteModal';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DeleteModal item={{id: 1, name: 'Lorem ipsum', isactive: true, image: ''}} isVisible={false} toggleVisibility={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
