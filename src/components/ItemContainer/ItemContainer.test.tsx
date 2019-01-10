import React from 'react';
import { mount } from 'enzyme';
import { createStore, compose } from 'redux';
import { reduxFirestore } from 'redux-firestore';
import { Provider } from 'react-redux';
import ItemContainer from './ItemContainer';

describe('<ItemContainer />', () => {
    const createStoreWithFirebase = compose(reduxFirestore({}))(createStore);
    const store = createStoreWithFirebase(() => {}, {});

    const loadMore = (page: number) => {};
    const addItem = (item: any) => {};
    const updateItem = (id: any, item: any) => {};
    const deleteItem = (id: number) => {};

    it('renders without crashing', () => {
        mount(
            <Provider store={store}>
                <ItemContainer
                    total={5}
                    loadMore={loadMore}
                    addItem={addItem}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                />
            </Provider>
        );
    });
});
