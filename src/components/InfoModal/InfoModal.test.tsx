import React, { SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import InfoModal from './InfoModal';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const toggleVisibility = (event: SyntheticEvent) => true;
    ReactDOM.render(<InfoModal item={{id: 1, name: 'Lorem ipsum', isactive: true, image: ''}} isVisible={false} toggleVisibility={toggleVisibility} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
