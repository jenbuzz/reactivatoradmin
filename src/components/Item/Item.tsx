import React, { Component, SyntheticEvent } from 'react';
import Modal from './../Modal';
import './Item.scss';

export interface ItemContent {
    id?: number;
    name: string;
    isactive: boolean;
    image: string;
}

interface ItemProps {
    item: ItemContent;
    updateItem: (item: ItemContent) => void;
}

interface ItemState {
    isInfoModalVisible: boolean;
    isDeleteModalVisible: boolean;
    isImageModalVisible: boolean;
}

class Item extends Component<ItemProps, ItemState> {
    state = {
        isInfoModalVisible: false,
        isDeleteModalVisible: false,
        isImageModalVisible: false,
    };

    toggleIsActive = () => {
        const updatedItem = {
            ...this.props.item,
            isactive: !this.props.item.isactive,
        };

        this.props.updateItem(updatedItem);
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

        if (this.props.item.image) {
            this.setState((state: ItemState) => ({
                isImageModalVisible: !state.isImageModalVisible,
            }));
        }
    };

    render() {
        const { isInfoModalVisible, isDeleteModalVisible, isImageModalVisible } = this.state;
        const { item } = this.props;

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
                    <img
                        src={item.image ? item.image : '/images/default.jpg'}
                        height="80"
                        alt={item.name}
                        onClick={this.toggleImageModal}
                    />
                </div>
                <div className="column is-3 has-text-right item--action-buttons">
                    <button className="button is-info" onClick={this.toggleInfoModal}>Info</button>
                    <button className="button is-danger" onClick={this.toggleDeleteModal}>Delete</button>
                </div>
                <Modal item={item} isVisible={isDeleteModalVisible} toggleVisibility={this.toggleDeleteModal}>
                    {(item: ItemContent, toggleVisibility: any) => (
                        <div className="box">
                            <p>Are you sure you want to delete <strong>{item.name}</strong>?</p>
                            <button className="button is-primary" onClick={toggleVisibility}>Cancel</button>
                            <button className="button is-danger">Delete</button>
                        </div>
                    )}
                </Modal>
                <Modal item={item} isVisible={isInfoModalVisible} toggleVisibility={this.toggleInfoModal}>
                    {(item: ItemContent) => (
                        <div className="box">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>ID</strong></td>
                                        <td>{item.id}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Name</strong></td>
                                        <td>{item.name}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Is active?</strong></td>
                                        <td>{item.isactive}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Image</strong></td>
                                        <td>{item.image}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </Modal>
                <Modal item={item} isVisible={isImageModalVisible} toggleVisibility={this.toggleImageModal}>
                    {(item: ItemContent) => (
                        <div className="has-text-centered">
                            <img src={item.image} />
                        </div>
                    )}
                </Modal>
            </div>
        );
    }
}

export default Item;
