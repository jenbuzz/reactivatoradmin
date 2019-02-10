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

    let loadMore: any;
    let addItem: any;
    let updateItem: any;
    let deleteItem: any;

    let wrapper: any;

    beforeEach(() => {
        jest.resetModules();

        process.env.REACT_APP_FIREBASE_COLLECTION = 'items';

        loadMore = jest.fn();
        addItem = jest.fn();
        updateItem = jest.fn();
        deleteItem = jest.fn();

        wrapper = mount(
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

    it('should call addItem on submitting add-item form', () => {
        wrapper.find('button#addItem').simulate('submit');

        expect(addItem).toBeCalled();
    });

    it('should call updateItem on change active state', () => {
        wrapper.find('button#btnDelete').simulate('click');
        wrapper.find('button#btnDeleteConfirm').simulate('click');

        expect(deleteItem).toBeCalled();
    });

    it('should call loadMore on pagination btn click', () => {
        wrapper.find('button#btnLoadMore').simulate('click');

        expect(loadMore).toBeCalled();
    });
});
