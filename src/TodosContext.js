import React, { createContext, useState } from "react";

export const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Create React project",
      createdAt: "01/10/2024",
      createdTime: "5:55",
      completed: false,
    },
    {
      id: 2,
      title: "Learn react",
      createdAt: "01/10/2024",
      createdTime: "5:55",
      completed: false,
    },
  ]);

  const onChangeTodo = ({ action, id }) => {
    if (action === "delete") {
      const filterTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filterTodos);
    } else if (action === "completed") {
      const mappedTodos = todos.map((todo) => {
        return todo.id === id
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      });
      setTodos(mappedTodos);
    } else if (action === "filter") {
      const filterTodos = todos.filter((todo) => todo.completed);
      setTodos(filterTodos);
    }
  };

  return (
    <TodosContext.Provider value={{ todos, onChangeTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
