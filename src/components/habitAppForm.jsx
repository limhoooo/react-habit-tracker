



import React, { Component } from 'react';

class HabitAppForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = (e) => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        this.formRef.current.reset();
    }

    render() {
        return (
            <form
                ref={this.formRef}
                className="add-from"
                onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="Habit"
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAppForm;