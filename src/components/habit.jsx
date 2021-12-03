import React, { Component } from 'react';

class Habit extends Component {
    state = {
        conut: 0,
    }
    render() {
        return (
            <li className="habit">
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.conut}</span>
                <button className="habit-button habit-icrease">
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease">
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;