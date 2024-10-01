import { useState } from "react";
import "./App.css";
import ActionsHeader from "./components/ActionsHeader";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Create React project",
      createdAt: "01/10/2024",
      createdTime: "5:55",
    },
    {
      id: 2,
      title: "Learn react",
      createdAt: "01/10/2024",
      createdTime: "5:55",
    },
  ]);

  const onChangeTodo = ({ action, id }) => {
    if (action === "delete") {
      const filterTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filterTodos);
      return;
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <ActionsHeader />
        <TodoList todos={todos} onChangeTodo={onChangeTodo} />
      </main>
    </div>
  );
}

export default App;
