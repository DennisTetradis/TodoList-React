import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ id: "", task: "", completed: "false" });

  let handleChange = (e) => {
    e.preventDefault();
    setTodo({ ...todo, task: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: Math.floor(Math.random() * 2000) });
    }
    setTodo({ ...todo, task: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type='text'
        placeholder='Type todo here:'
        value={todo.task}
      ></input>
      <button type='submit'>Add Todo</button>
    </form>
  );
}

export default TodoForm;
