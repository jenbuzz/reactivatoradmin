import React, { Component, SyntheticEvent } from 'react';
import InfoModal from './../InfoModal';
import DeleteModal from './../DeleteModal';
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
        isDeleteModalVisible: false,
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

    toggleDeleteModal = (event: SyntheticEvent) => {
        event.preventDefault();

        this.setState((state: any) => ({
            isDeleteModalVisible: !state.isDeleteModalVisible,
        }));
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
                    <button className="button is-danger" onClick={this.toggleDeleteModal}>Delete</button>
                </div>
                <InfoModal item={item} isVisible={this.state.isInfoModalVisible} toggleVisibility={this.toggleInfoModal} />
                <DeleteModal item={item} isVisible={this.state.isDeleteModalVisible} toggleVisibility={this.toggleDeleteModal} />
            </div>
        );
    }
}

export default Item;
