import React from 'react';
import { shallow } from 'enzyme';
import Item, { ItemContent } from './Item';

describe('<Item />', () => {
    it('renders without crashing', () => {
        const item: ItemContent = {
            id: 1,
            name: 'Lorem ipsum',
            isactive: true,
            image: '',
        };
        const updateItem = (item: ItemContent) => {};
        const deleteItem = (item: ItemContent) => {};

        shallow(
            <Item item={item} updateItem={updateItem} deleteItem={deleteItem} />
        );
    });
});
