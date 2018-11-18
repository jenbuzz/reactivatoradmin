import React, { SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import DeleteModal from './DeleteModal';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const toggleVisibility = (event: SyntheticEvent) => true;
    ReactDOM.render(<DeleteModal item={{id: 1, name: 'Lorem ipsum', isactive: true, image: ''}} isVisible={false} toggleVisibility={toggleVisibility} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
