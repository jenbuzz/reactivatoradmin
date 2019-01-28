import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ItemContainer from './ItemContainer';

describe('<ItemContainer />', () => {
    const mockStore = configureStore([]);
    const store = mockStore({
        firestore: {
            status: {
                requesting: {
                    items: false,
                },
            },
            ordered: {
                items: [
                    {
                        id: '1234-abcd',
                        name: 'Lorem ipsum',
                        image: '',
                        isactive: false,
                    },
                ],
            },
        },
    });

    const loadMore = jest.fn();
    const addItem = jest.fn();
    const updateItem = jest.fn();
    const deleteItem = jest.fn();

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
