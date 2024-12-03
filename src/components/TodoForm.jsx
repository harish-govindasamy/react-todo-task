import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState({ name: "", description: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wordCount = todo.description.trim().split(/\s+/).length;
    if (!todo.name) {
      setError("Name is required.");
      return;
    }
    if (wordCount < 10 || wordCount > 200) {
      setError("Description must be between 10 and 200 words.");
      return;
    }
    addTodo({ ...todo, status: "Not Completed" });
    setTodo({ name: "", description: "" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={todo.name}
        onChange={handleChange}
        placeholder="Todo Name"
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={todo.description}
        onChange={handleDescriptionChange}
        placeholder="Todo Description"
        rows="1"
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
