import React, { Component, ReactNode, SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';
import { ItemContent } from './../Item';

interface ModalProps {
    item: ItemContent;
    isVisible: boolean;
    toggleVisibility: (event: SyntheticEvent) => void;
    children: (item: ItemContent, toggleVisibility: any) => ReactNode;
}

class Modal extends Component<ModalProps> {
    container: HTMLElement;

    constructor(props: ModalProps) {
        super(props);

        this.container = document.createElement('div');
        document.body.appendChild(this.container);
    }

    componentWillUnmount() {
        document.body.removeChild(this.container);
    }

    render() {
        const { item, isVisible, toggleVisibility, children } = this.props;

        if (!isVisible) {
            return null;
        }

        return createPortal(
            <div className={'modal' + (isVisible ? ' is-active' : '')}>
                <div className="modal-background" />
                <div className="modal-content">
                    {children ? children(item, toggleVisibility) : ''}
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={toggleVisibility} />
            </div>,
            this.container
        );
    }
}

export default Modal;
