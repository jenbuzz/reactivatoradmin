import React, { Component } from 'react';
import { ItemContent } from './../Item';
import './DeleteModal.scss';

interface DeleteModalProps {
    item: ItemContent;
    isVisible: boolean;
    toggleVisibility: any;
}

class DeleteModal extends Component<DeleteModalProps, {}> {
    render() {
        const { item, isVisible, toggleVisibility } = this.props;

        return (
            <div className={'modal delete-modal' + (isVisible ? ' is-active' : '')}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <p>Are you sure you want to delete <strong>{item.name}</strong>?</p>
                        <button className="button is-primary" onClick={toggleVisibility}>Cancel</button>
                        <button className="button is-danger">Delete</button>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={toggleVisibility}></button>
            </div>
        );
    }
}

export default DeleteModal;
