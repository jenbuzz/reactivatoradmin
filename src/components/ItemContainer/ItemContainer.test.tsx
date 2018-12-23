import React from 'react';
import { shallow } from 'enzyme';
import { createStore, compose } from 'redux';
import { reduxFirestore } from 'redux-firestore';
import { Provider } from 'react-redux';
import ItemContainer from './ItemContainer';

describe('<ItemContainer />', () => {
    it('renders without crashing', () => {
        const createStoreWithFirebase = compose(reduxFirestore({}))(createStore);
        const store = createStoreWithFirebase(() => {}, {});

        const loadMore = (page: number) => {};
        const updateItem = (id: any, item: any) => {};

        shallow((
            <Provider store={store}>
                <ItemContainer total={5} loadMore={loadMore} updateItem={updateItem} />
            </Provider>
        ));
    });
});
