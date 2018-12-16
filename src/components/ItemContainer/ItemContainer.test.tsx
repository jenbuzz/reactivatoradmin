import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { reduxFirestore } from 'redux-firestore';
import { Provider } from 'react-redux';
import ItemContainer from './ItemContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const createStoreWithFirebase = compose(reduxFirestore({}))(createStore);
    const store = createStoreWithFirebase(() => {}, {});

    const loadMore = (page: number) => {};
    const updateItem = (id: any, item: any) => {};

    ReactDOM.render(
        (
            <Provider store={store}>
                <ItemContainer total={5} loadMore={loadMore} updateItem={updateItem} />
            </Provider>
        ),
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
