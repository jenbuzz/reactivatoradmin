import React, { SyntheticEvent } from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('<Modal />', () => {
    it('renders without crashing', () => {
        const toggleVisibility = (event: SyntheticEvent) => true;
        const children = () => <div>test</div>;

        shallow((
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
            />
        ));
    });
});
