import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Item.scss';

export interface ItemContent {
    id: number;
    name: string;
    isactive: boolean;
    image: string|null;
}

interface ItemProps {
  item: ItemContent;
}

class Item extends Component<ItemProps, {}> {
    static propTypes = {
        item: PropTypes.object,
    };

    render() {
        const item = this.props.item;

        return (
            <div className="item">{item.name}</div>
        );
    }
}

export default Item;
