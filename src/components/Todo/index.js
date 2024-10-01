import styles from "./Todo.module.scss";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

function Todo({ todo, onChangeTodo }) {
  const { title, createdTime, createdAt } = todo;

  const onChecked = (e) => {
    if (e.target.checked) {
      onChangeTodo({ action: "completed", id: todo.id });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.detailsWrapper}>
        <input
          type="checkbox"
          name="check-todo"
          id="checkTodo"
          checked={todo.completed}
          onChange={onChecked}
        />

        <div>
          <p className={todo.completed ? styles.strikeThrough : ""}>{title}</p>
          <p>
            {createdTime},{createdAt}
          </p>
        </div>

        <div></div>
      </div>

      <div className={styles.actionsWrapper}>
        <span>
          <MdDelete
            onClick={() => onChangeTodo({ action: "delete", id: todo.id })}
          />
        </span>
        <span>
          <MdModeEditOutline />
        </span>
      </div>
    </div>
  );
}

export default Todo;
