import React, { Component } from 'react';
import Habit from './habit';
import HabitAppForm from './habitAppForm';

class Habits extends Component {

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleIncrement = habit => {
        this.props.onIncrement(habit);
    }
    handleDecrement = habit => {
        this.props.onDecrement(habit);
    }
    handleDelete = habit => {
        this.props.onDelete(habit);
    }
    handleAdd = name => {
        this.props.onAdd(name)
    }
    render() {
        return (
            <>
                <HabitAppForm
                    onAdd={this.handleAdd}
                />
                <ul>
                    {
                        this.props.habits.map(habit =>
                            <Habit
                                key={habit.id}
                                habit={habit}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            />
                        )
                    }
                </ul>
                <button
                    onClick={this.props.onReset}
                    className="habits-reset">
                    Reset All
                </button>
            </>
        );
    }
}

export default Habits;