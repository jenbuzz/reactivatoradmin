import React from 'react';
import { shallow } from 'enzyme';
import { ItemContent } from './../Item';
import AddItem from './AddItem';

describe('<AddItem />', () => {
    it('renders without crashing', () => {
        const addItem = (item: ItemContent) => {};

        shallow(<AddItem addItem={addItem} />);
    });
});
