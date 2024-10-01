import { useContext } from "react";
import Todo from "../Todo";
import styles from "./TodoList.module.scss";
import { TodosContext } from "../../TodosContext";

function TodoList() {
  const { todos, onChangeTodo } = useContext(TodosContext);

  return (
    <div className={styles.container}>
      {todos.map((todo, i) => (
        <Todo todo={todo} key={todo.id} onChangeTodo={onChangeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
