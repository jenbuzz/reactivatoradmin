import React, { Component, SyntheticEvent } from 'react';
import { ItemContent } from './../Item';
import './AddItem.scss';

interface AddItemProps {
    addItem: (item: ItemContent) => void;
}

interface AddItemState {
    name: string;
    image: string;
    isactive: boolean;
}

class AddItem extends Component<AddItemProps, AddItemState> {
    state = {
        name: '',
        image: '',
        isactive: false,
    };

    saveInputToState = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.currentTarget.name;
        const value = event.currentTarget.value;

        if (Object.keys(this.state).indexOf(key) !== -1) {
            this.setState({
                [key]: value,
            } as any);
        }
    };

    handleAddItem = (event: SyntheticEvent) => {
        event.preventDefault();

        this.props.addItem(this.state);
        this.setState({
            name: '',
            image: '',
        });
    };

    render() {
        return (
            <div className="add-item">
                <form onSubmit={this.handleAddItem}>
                    <div className="field is-horizontal">
                        <div className="field">
                            <input
                                name="name"
                                className="input"
                                type="text"
                                placeholder="Enter name..."
                                onChange={this.saveInputToState}
                            />
                        </div>
                        <div className="field">
                            <input
                                name="image"
                                className="input"
                                type="text"
                                placeholder="Enter image URL..."
                                onChange={this.saveInputToState}
                            />
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddItem;
