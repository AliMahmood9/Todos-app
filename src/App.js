import { useState } from "react";
import "./App.css";
import ActionsHeader from "./components/ActionsHeader";
import AddTodoModal from "./components/AddTodoModal";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodosProvider from "./context/TodosContext";

function App() {
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Header />
      <TodosProvider>
        <AddTodoModal show={showModal} onClose={onCloseModal} />
        <main className="main">
          <ActionsHeader onOpenModal={onOpenModal} />
          <TodoList />
        </main>
      </TodosProvider>
    </div>
  );
}

export default App;
