import { useContext } from "react";
import Todo from "../Todo";
import styles from "./TodoList.module.scss";
import { TodosContext } from "../../context/TodosContext";

function TodoList() {
  const { todos, onChangeTodo } = useContext(TodosContext);

  return (
    <div className={styles.container}>
      {todos.length === 0 ? (
        <p>No todos available. Add a new task!</p>
      ) : (
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onChangeTodo={onChangeTodo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
