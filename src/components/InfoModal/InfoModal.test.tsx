import React from 'react';
import ReactDOM from 'react-dom';
import InfoModal from './InfoModal';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InfoModal item={{id: 1, name: 'Lorem ipsum', isactive: true, image: ''}} isVisible={false} toggleVisibility={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
