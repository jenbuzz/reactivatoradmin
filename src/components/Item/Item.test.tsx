import React from 'react';
import ReactDOM from 'react-dom';
import Item, { ItemContent } from './Item';

describe('<Item />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        const updateItem = (item: ItemContent) => {};

        ReactDOM.render(
            <Item
                item={{
                    id: 1,
                    name: 'Lorem ipsum',
                    isactive: true,
                    image: '',
                }}
                updateItem={updateItem}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});
