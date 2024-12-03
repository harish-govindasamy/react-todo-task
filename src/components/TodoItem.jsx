import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, editedTodo);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });
  };

  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleStatusChange = (e) => {
    setEditedTodo({
      ...editedTodo,
      status: e.target.value,
    });
    updateTodo(todo.id, { ...todo, status: e.target.value });
  };

  return (
    <div
      className={`todo-card ${
        todo.status === "Completed" ? "completed" : "not-completed"
      }`}
    >
      {isEditing ? (
        <>
          <input name="name" value={editedTodo.name} onChange={handleChange} />
          <textarea
            name="description"
            value={editedTodo.description}
            onChange={handleDescriptionChange}
            rows="1"
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p className="todo-label">Name:</p>
          <h3>{todo.name}</h3>
          <p className="todo-label">Description:</p>
          <p title={todo.description}>{todo.description}</p>
          <p className="todo-label">Status:</p>
          <select value={todo.status} onChange={handleStatusChange}>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
