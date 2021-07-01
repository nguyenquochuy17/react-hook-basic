import React from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};
ToDoList.defaultProps = {
    todos: [],
    onTodoClick: null
}

function ToDoList(props) {
    console.log("Rendering TodoList")
    const { todos, onTodoClick } = props

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo)
        }
    }
    return (
        <ul className="to-do-list">
            {todos.map(todo => (
                <li key={todo.id}
                    onClick={() => handleClick(todo)}
                > {todo.title}</li>
            ))}
        </ul>
    );
}

export default ToDoList;