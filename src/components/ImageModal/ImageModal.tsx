import React, { Component } from 'react';
import { ItemContent } from './../Item';

interface IImageModalProps {
    item: ItemContent;
    isVisible: boolean;
    toggleVisibility: any;
}

class ImageModal extends Component<IImageModalProps> {
    render() {
        const { item, isVisible, toggleVisibility } = this.props;

        return (
            <div className={'modal' + (isVisible ? ' is-active' : '')}>
                <div className="modal-background" />
                <div className="modal-content">
                    <img src={item.image} />
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={toggleVisibility} />
            </div>
        );
    }
}

export default ImageModal;
