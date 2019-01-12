import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemContent } from './../Item';
import AddItem from './AddItem';

describe('<AddItem />', () => {
    it('renders without crashing', () => {
        const addItem = (item: ItemContent) => {};

        shallow(<AddItem addItem={addItem} />);
    });

    it('should submit add-item form', () => {
        const addItem = jest.fn();

        const wrapper = mount(<AddItem addItem={addItem} />);
        wrapper.find('button').simulate('submit');

        const state = wrapper.state() as any;

        expect(addItem).toBeCalled();
        expect(state.name).toEqual('');
        expect(state.image).toEqual('');
    });

    it('should update name in state on input change', () => {
        const addItem = (item: ItemContent) => {};

        const wrapper = mount(<AddItem addItem={addItem} />);

        const input = wrapper.find('input').at(0);
        const inputInstance = input.instance() as any;
        inputInstance.value = 'abc';
        input.simulate('change');

        const state = wrapper.state() as any;

        expect(state.name).toEqual('abc');
    });

    it('should update image in state on input change', () => {
        const addItem = (item: ItemContent) => {};

        const wrapper = mount(<AddItem addItem={addItem} />);

        const input = wrapper.find('input').at(1);
        const inputInstance = input.instance() as any;
        inputInstance.value = 'abc';
        input.simulate('change');

        const state = wrapper.state() as any;

        expect(state.image).toEqual('abc');
    });
});
