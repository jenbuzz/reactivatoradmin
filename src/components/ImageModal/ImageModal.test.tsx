import React, { SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import ImageModal from './ImageModal';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const toggleVisibility = (event: SyntheticEvent) => true;
    ReactDOM.render(<ImageModal item={{id: 1, name: 'Lorem ipsum', isactive: true, image: ''}} isVisible={false} toggleVisibility={toggleVisibility} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
