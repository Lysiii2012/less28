import React from "react";

const TodoList = ({ todos, removeTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                    <span>{todo.text}</span>
                    <button onClick={() => removeTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
