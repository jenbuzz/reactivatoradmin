import React, { Component } from 'react';
import { ItemContent } from './../Item';

interface ImageModalProps {
    item: ItemContent;
    isVisible: boolean;
    toggleVisibility: any;
}

class ImageModal extends Component<ImageModalProps, {}> {
    render() {
        const { item, isVisible, toggleVisibility } = this.props;

        return (
            <div className={'modal' + (isVisible ? ' is-active' : '')}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <img src={item.image} />
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={toggleVisibility}></button>
            </div>
        );
    }
}

export default ImageModal;
