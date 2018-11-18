import React, { Component, SyntheticEvent } from 'react';
import InfoModal from './../InfoModal';
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
        isInfoModalVisible: false,
    };

    toggleIsActive = (event: SyntheticEvent) => {
        event.preventDefault();

        this.setState((state: any) => ({
            item: {
                ...state.item,
                isactive: !state.item.isactive,
            }
        }));
    };

    toggleInfoModal = (event: SyntheticEvent) => {
        event.preventDefault();

        this.setState((state: any) => ({
            isInfoModalVisible: !state.isInfoModalVisible,
        }));
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
                            onChange={this.toggleIsActive} 
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
                    <button className="button is-info" onClick={this.toggleInfoModal}>Info</button>
                    <button className="button is-danger" onClick={this.showPopupDelete}>Delete</button>
                </div>
                <InfoModal item={item} isVisible={this.state.isInfoModalVisible} toggleVisibility={this.toggleInfoModal} />
            </div>
        );
    }
}

export default Item;
