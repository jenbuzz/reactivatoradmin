import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Item, { ItemContent } from './../Item';
import Pagination from './../Pagination';
import './ItemContainer.scss';

interface ItemContainerState {
    page: number;
}

interface ItemContainerProps {
    items: ItemContent[];
    total: number;
    loadMore: (page: number) => void;
    loading: boolean;
    updateItem: (id: number, item: ItemContent) => void;
}

class ItemContainer extends Component<ItemContainerProps, ItemContainerState> {
    state = {
        page: 1,
    };

    updateItem = (item: ItemContent) => {
        const { id, ...baseItem } = item;

        if (!id) {
            return;
        }

        this.props.updateItem(id, baseItem);
    }

    loadMore = () => {
        this.setState((state: any) => {
            return {
                page: state.page + 1,
            };
        }, () => {
            this.props.loadMore(this.state.page);
        });
    }

    render() {
        const { items } = this.props;

        if (this.props.loading) {
            return <div>Loading...</div>;
        }

        if (!items || !Array.isArray(items) || items.length === 0) {
            return null;
        }

        return (
            <section className="section item-container">
                <div className="columns">
                    <div className="column is-12">
                        <div className="card">
                            <div className="card-table">
                                <div className="content">
                                    {Object.keys(this.props.items).map(
                                        (key: any) => (
                                            <Item
                                                key={key}
                                                item={this.props.items[key]}
                                                updateItem={this.updateItem}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination
                    hasLoadedAll={items.length === this.props.total}
                    loadMore={this.loadMore}
                />
            </section>
        );
    }
}

export default connect((state: any) => {
    const key = process.env.REACT_APP_FIREBASE_COLLECTION 
        ? process.env.REACT_APP_FIREBASE_COLLECTION : '';

    return {
        items: state ? state.firestore.ordered[key] : [],
    };
})(ItemContainer);
