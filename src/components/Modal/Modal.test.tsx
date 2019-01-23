import React, { SyntheticEvent } from 'react';
import { shallow, mount } from 'enzyme';
import Modal from './Modal';

describe('<Modal />', () => {
    it('renders without crashing', () => {
        const toggleVisibility = (event: SyntheticEvent) => true;
        const children = () => <div>test</div>;

        shallow(
            <Modal
                item={{
                    id: 1,
                    name: 'Lorem ipsum',
                    isactive: true,
                    image: '',
                }}
                toggleVisibility={toggleVisibility}
                children={children}
            />
        );
    });

    it('renders component with children props', () => {
        const item = {
            id: 1,
            name: 'Lorem ipsum',
            isactive: true,
            image: '',
        };
        const toggleVisibility = (event: SyntheticEvent) => true;
        const children = () => <div>test</div>;

        const modalComponent = mount(
            <Modal
                item={item}
                toggleVisibility={toggleVisibility}
                children={children}
            />
        ).instance();

        const { props } = modalComponent;

        expect(props.children).toBe(children);
    });

    it('should remove modal from dom on unmount', () => {
        const toggleVisibility = (event: SyntheticEvent) => true;
        const children = () => <div>test</div>;

        const modalComponent = mount(
            <Modal
                item={{
                    id: 1,
                    name: 'Lorem ipsum',
                    isactive: true,
                    image: '',
                }}
                toggleVisibility={toggleVisibility}
                children={children}
            />
        );

        expect(document.body.childNodes.length).toBe(3);

        modalComponent.unmount();

        expect(document.body.childNodes.length).toBe(2);
    });
});
