// import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Filter from "./components/Filter";

const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <TodoForm />
        <div className="todo-container">
          <div className="todo-header">
            <h1>My Todos</h1>
            <div className="filter-container">
              <span className="filter-label">Status Filter:</span>
              <Filter />
            </div>
          </div>
          <TodoList />
        </div>
        <footer>
          <p>Created by Harish G - Batch59WD-T</p>
          <div className="footer-content">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="github-icon"
              width="20"
              height="20"
            />
            <a
              href="https://github.com/harish-govindasamy?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              harish-govindasamy
            </a>
          </div>
        </footer>
      </div>
    </TodoProvider>
  );
};

export default App;
