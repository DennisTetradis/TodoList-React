import React from "react";

function Todo({ todo, removeTodo }) {
  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <div>
      <div key={todo.id}>
        <span>{todo.task}</span>
        <button onClick={handleRemoveTodo}>X</button>
      </div>
    </div>
  );
}

export default Todo;
