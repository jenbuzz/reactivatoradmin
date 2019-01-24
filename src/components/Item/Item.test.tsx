import React from 'react';
import { mount } from 'enzyme';
import Item, { ItemContent } from './Item';

describe('<Item />', () => {
    const item: ItemContent = {
        id: 1,
        name: 'Lorem ipsum',
        isactive: true,
        image: 'img.jpg',
    };

    let updateItem: any;
    let deleteItem: any;
    let wrapper: any;

    beforeEach(() => {
        updateItem = jest.fn();
        deleteItem = jest.fn();

        wrapper = mount(
            <Item item={item} updateItem={updateItem} deleteItem={deleteItem} />
        );
    });

    it('should call updateItem on isactive change', () => {
        const input = wrapper.find('input').at(0);
        input.simulate('change');

        expect(updateItem).toBeCalled();
    });

    it('should update isImageModalVisible in state on image click', () => {
        const img = wrapper.find('img').at(0);
        img.simulate('click');

        const state = wrapper.state() as any;

        expect(state.isImageModalVisible).toBeTruthy();
    });

    it('should update isInfoModalVisible in state on info btn click', () => {
        const btn = wrapper.find('button#btnInfo').at(0);
        btn.simulate('click');

        const state = wrapper.state() as any;

        expect(state.isInfoModalVisible).toBeTruthy();
    });

    it('should update isDeleteModalVisible in state on delete btn click', () => {
        const btn = wrapper.find('button#btnDelete').at(0);
        btn.simulate('click');

        const state = wrapper.state() as any;

        expect(state.isDeleteModalVisible).toBeTruthy();
    });
});
