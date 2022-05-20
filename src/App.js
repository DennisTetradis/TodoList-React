import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storageTodos = JSON.parse(
      localStorage.getItem("react-todo-list-todos")
    );
    if (storageTodos) {
      setTodos(storageTodos);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("react-todo-list-todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (todo) => {
    console.log("Added");
    setTodos([todo, ...todos]);
    // console.log(todos);
  };

  const removeTodo = (id) => {
    console.log("shit");
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='App'>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos} removeTodo={removeTodo}></TodoList>
    </div>
  );
}

export default App;
