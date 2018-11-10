import React, { Component, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import './Item.scss';

export interface ItemContent {
    id: number;
    name: string;
    isactive: boolean;
    image: string;
}

interface ItemProps {
  item: ItemContent;
}

class Item extends Component<ItemProps, {}> {
    static propTypes = {
        item: PropTypes.object,
    };

    handleIsActiveClick = (event: SyntheticEvent) => {
        console.log('TODO: change isactive state');
    };

    render() {
        const item = this.props.item;

        return (
            <div className="item columns">
                <div className="column is-1">
                    <input type="checkbox" checked={item.isactive} onChange={this.handleIsActiveClick} />
                </div>
                <div className="column is-4 has-text-left">
                    <span>{item.name}</span>
                </div>
                <div className="column is-4 has-text-left">
                    <img src={item.image} height="80" />
                </div>
            </div>
        );
    }
}

export default Item;
