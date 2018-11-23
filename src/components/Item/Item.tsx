import React, { Component, SyntheticEvent } from 'react';
import InfoModal from './../InfoModal';
import DeleteModal from './../DeleteModal';
import ImageModal from './../ImageModal';
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

interface ItemState {
    item: ItemContent;
    isInfoModalVisible: boolean;
    isDeleteModalVisible: boolean;
    isImageModalVisible: boolean;
}

class Item extends Component<ItemProps, ItemState> {
    state = {
        item: this.props.item,
        isInfoModalVisible: false,
        isDeleteModalVisible: false,
        isImageModalVisible: false,
    };

    toggleIsActive = (event: SyntheticEvent) => {
        this.setState((state: ItemState) => ({
            item: {
                ...state.item,
                isactive: !state.item.isactive,
            }
        }));
    };

    toggleInfoModal = (event: SyntheticEvent) => {
        event.preventDefault();

        this.setState((state: ItemState) => ({
            isInfoModalVisible: !state.isInfoModalVisible,
        }));
    };

    toggleDeleteModal = (event: SyntheticEvent) => {
        event.preventDefault();

        this.setState((state: ItemState) => ({
            isDeleteModalVisible: !state.isDeleteModalVisible,
        }));
    };

    toggleImageModal = (event: SyntheticEvent) => {
        event.preventDefault();

        if (this.state.item.image) {
            this.setState((state: ItemState) => ({
                isImageModalVisible: !state.isImageModalVisible,
            }));
        }
    };

    render() {
        const { item, isInfoModalVisible, isDeleteModalVisible, isImageModalVisible } = this.state;

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
                <div className="column is-5 has-text-left item--image">
                    <img src={item.image ? item.image : '/images/default.jpg'} height="80" alt={item.name} onClick={this.toggleImageModal} />
                </div>
                <div className="column is-3 has-text-right item--action-buttons">
                    <button className="button is-info" onClick={this.toggleInfoModal}>Info</button>
                    <button className="button is-danger" onClick={this.toggleDeleteModal}>Delete</button>
                </div>
                <InfoModal item={item} isVisible={isInfoModalVisible} toggleVisibility={this.toggleInfoModal} />
                <DeleteModal item={item} isVisible={isDeleteModalVisible} toggleVisibility={this.toggleDeleteModal} />
                <ImageModal item={item} isVisible={isImageModalVisible} toggleVisibility={this.toggleImageModal} />
            </div>
        );
    }
}

export default Item;
