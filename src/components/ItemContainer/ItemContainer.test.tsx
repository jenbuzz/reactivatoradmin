import React from 'react';
import ReactDOM from 'react-dom';
import ItemContainer from './ItemContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const loadMore = (page: number) => {};
    const updateItem = (id: any, item: any) => {};

    ReactDOM.render(
        <ItemContainer total={5} loadMore={loadMore} loading={false} updateItem={updateItem} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
