import React from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            completed: props.completed
        }

        this.checkedHandler = this.checkedHandler.bind(this);
    }

    checkedHandler(){
        this.setState((prevStatus) => {
            prevStatus.completed = !prevStatus.completed;
            return prevStatus;
        })
    }

    render() {
        return (
            <div className={'listItem '+ (this.state.completed ? 'completed' : '')} onClick={this.checkedHandler}>
                <span>{this.state.title}</span>
            </div>
        );
    }

}

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
};