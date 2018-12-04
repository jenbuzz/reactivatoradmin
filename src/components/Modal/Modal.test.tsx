import React, { SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const toggleVisibility = (event: SyntheticEvent) => true;
    const children = () => <div>test</div>;
    ReactDOM.render(
        <Modal
            item={{
                id: 1,
                name: 'Lorem ipsum',
                isactive: true,
                image: '',
            }}
            isVisible={false}
            toggleVisibility={toggleVisibility}
            children={children}
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
