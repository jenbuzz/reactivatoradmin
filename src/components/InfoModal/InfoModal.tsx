import React, { Component } from 'react';
import { ItemContent } from './../Item';

interface InfoModalProps {
    item: ItemContent;
    isVisible: boolean;
    toggleVisibility: any;
}

class InfoModal extends Component<InfoModalProps, {}> {
    render() {
        const { item, isVisible, toggleVisibility } = this.props;

        return (
            <div className={'modal' + (isVisible ? ' is-active' : '')}>
                <div className="modal-background"></div>
                <div className="modal-content">
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
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={toggleVisibility}></button>
            </div>
        );
    }
}

export default InfoModal;
