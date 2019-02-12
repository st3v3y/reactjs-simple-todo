import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos : []
        };

        this.submitHandle = this.submitHandle.bind(this);
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(result => {
        //      return result.json();
        // })
        // .then(result => {
        //     this.setState({todos : result});
        // })
        // .catch((error) => { console.log(error); });
    }

    createListItem(todo){
        return <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />;
    }

    submitHandle(e){
        e.preventDefault();

        if(!this._inputElement.value.trim()){
            return;
        }

        const newTodo = {
            id : new Date(),
            title: this._inputElement.value,
            completed: false
        };

        this.setState((prevState) => {
            return {
                todos : prevState.todos.concat(newTodo)
            };
        });

        this._inputElement.value = '';
    }

    render() {
        const todoList = this.state.todos.map(this.createListItem).reverse();

        return (
            <div>
                <form onSubmit={this.submitHandle}>
                    <input className="todoInput"
                        ref={(el) => this._inputElement = el} 
                        placeholder="Please enter your todo" />
                    <button className="addButton">add</button>
                </form>
                <div id="todo-list">{todoList}</div>
            </div>
        );
    }

}

TodoList.propTypes = {
    todos : PropTypes.arrayOf(PropTypes.any)
};