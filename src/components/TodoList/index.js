import Todo from "../Todo";
import styles from "./TodoList.module.scss";

function TodoList({ todos, onChangeTodo }) {
  return (
    <div className={styles.container}>
      {todos.map((todo, i) => (
        <Todo todo={todo} key={todo.id} onChangeTodo={onChangeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
