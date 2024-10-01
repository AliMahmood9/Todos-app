import { useEffect, useState } from "react";
import { initialTodos } from "../constants";

const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : initialTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        createdAt: "01/10/2024",
        createdTime: "5:55",
        title: todo.title,
        id: todo.id,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  const filterCompleted = () => {
    return todos.filter((todo) => todo.completed);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    filterCompleted,
    completeTodo,
  };
};

export default useTodos;
