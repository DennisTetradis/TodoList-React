import React from "react";
import Todo from "./Todo.js";

function TodoList({ todos, removeTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo}></Todo>
      ))}
    </div>
  );
}

export default TodoList;
