import React, { Component, SyntheticEvent } from 'react';
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
    state = {
        item: this.props.item,
    };

    handleIsActiveClick = (event: SyntheticEvent) => {
        this.setState({
            item: { ...this.state.item, isactive: !this.state.item.isactive }
        });
    };

    showPopupInfo = (event: SyntheticEvent) => {
        console.log('TODO: show popup with info');
    };

    showPopupDelete = (event: SyntheticEvent) => {
        console.log('TODO: show popup for delete confirmation');
    };

    render() {
        const item = this.state.item;

        return (
            <div className="item columns">
                <div className="column is-4">
                    <div className="field item--isactive">
                        <input 
                            id={'isactive-' + item.id} 
                            type="checkbox" 
                            className="switch is-success" 
                            checked={item.isactive} 
                            onChange={this.handleIsActiveClick} 
                        />
                        <label htmlFor={'isactive-' + item.id}>
                            {item.name}
                        </label>
                    </div>
                </div>
                <div className="column is-5 has-text-left">
                    <img src={item.image ? item.image : '/images/default.jpg'} height="80" />
                </div>
                <div className="column is-3 has-text-right item--action-buttons">
                    <button className="button is-info" onClick={this.showPopupInfo}>Info</button>
                    <button className="button is-danger" onClick={this.showPopupDelete}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Item;
