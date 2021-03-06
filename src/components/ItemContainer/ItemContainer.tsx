import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Item, { ItemContent } from './../Item';
import Pagination from './../Pagination';
import LoadingSpinner from './../LoadingSpinner';
import { State } from './../../store/store';
import AddItem from './../AddItem';
import './ItemContainer.scss';

interface ItemContainerState {
    page: number;
}

interface ItemContainerProps {
    items: ItemContent[];
    isLoading: boolean;
    total: number;
    loadMore: (page: number) => void;
    addItem: (item: ItemContent) => void;
    updateItem: (id: number, item: ItemContent) => void;
    deleteItem: (id: number) => void;
}

class ItemContainer extends Component<ItemContainerProps, ItemContainerState> {
    state = {
        page: 1,
    };

    addItem = (item: ItemContent) => {
        this.props.addItem(item);
    };

    updateItem = (item: ItemContent) => {
        const { id, ...baseItem } = item;

        if (!id) {
            return;
        }

        this.props.updateItem(id, baseItem);
    };

    deleteItem = (item: ItemContent) => {
        const { id } = item;

        if (!id) {
            return;
        }

        this.props.deleteItem(id);
    };

    loadMore = () => {
        this.setState(
            (state: ItemContainerState) => {
                return {
                    page: state.page + 1,
                };
            },
            () => {
                this.props.loadMore(this.state.page);
            }
        );
    };

    render() {
        const { items, isLoading } = this.props;

        return (
            <Fragment>
                {isLoading ? <LoadingSpinner /> : ''}
                <AddItem addItem={this.addItem} />
                {!items || !Array.isArray(items) || items.length === 0 ? (
                    ''
                ) : (
                    <section className="section item-container">
                        <div className="columns">
                            <div className="column is-12">
                                <div className="content">
                                    {Object.keys(this.props.items).map(
                                        (key: any) => (
                                            <Item
                                                key={key}
                                                item={this.props.items[key]}
                                                updateItem={this.updateItem}
                                                deleteItem={this.deleteItem}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <Pagination
                            hasLoadedAll={items.length === this.props.total}
                            loadMore={this.loadMore}
                        />
                    </section>
                )}
            </Fragment>
        );
    }
}

export default connect((state: State) => {
    const key = process.env.REACT_APP_FIREBASE_COLLECTION
        ? process.env.REACT_APP_FIREBASE_COLLECTION
        : '';

    const isLoading = state
        ? state.firestore.status.requesting[
              Object.keys(state.firestore.status.requesting)[0]
          ]
        : false;

    return {
        items: state ? state.firestore.ordered[key] : [],
        isLoading,
    };
})(ItemContainer);
