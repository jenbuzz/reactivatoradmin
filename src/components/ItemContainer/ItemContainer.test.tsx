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
    const updateItem = (id: any, item: any) => {};

    it('renders without crashing', () => {
        mount((
            <Provider store={store}>
                <ItemContainer total={5} loadMore={loadMore} updateItem={updateItem} />
            </Provider>
        ));
    });
});
