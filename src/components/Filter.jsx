import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Filter = () => {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      style={{ backgroundColor: "#282c34", color: "#c5c6c7" }}
    >
      <option value="All">All</option>
      <option value="Not Completed">Not Completed</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default Filter;
