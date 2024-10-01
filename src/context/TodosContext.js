import React, { createContext } from "react";
import useTodos from "../hooks/useTodos";

export const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    filterCompleted,
    completeTodo,
  } = useTodos();

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        completeTodo,
        updateTodo,
        filterCompleted,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
