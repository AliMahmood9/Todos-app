import "./App.css";
import ActionsHeader from "./components/ActionsHeader";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodosProvider from "./TodosContext";

function App() {
  return (
    <div className="App">
      <Header />
      <TodosProvider>
        <main className="main">
          <ActionsHeader />
          <TodoList />
        </main>
      </TodosProvider>
    </div>
  );
}

export default App;
