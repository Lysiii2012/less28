import React from "react";

const AddNewTodo = ({ newTodo, setNewTodo, addTodo }) => {
    return (
        <div className="top-todo">
            <input
                type="text"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
                placeholder="What I need"
            />
            <button onClick={addTodo}>Add Todo item</button> {/* Fixed typo */}
        </div>
    );
};

export default AddNewTodo;
