
import React, { useState } from "react";
import Todo from "./Todo";
import "./../styles/App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") {
      return;
    }

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
