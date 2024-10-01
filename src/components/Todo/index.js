import styles from "./Todo.module.scss";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

function Todo({ todo, onChangeTodo }) {
  const { title, createdTime, createdAt } = todo;
  return (
    <div className={styles.container}>
      <div className={styles.detailsWrapper}>
        <input type="checkbox" />
        <div>
          <p>{title}</p>
          <p>
            <span>{createdTime},</span>
            <span>{createdAt}</span>
          </p>
        </div>
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
