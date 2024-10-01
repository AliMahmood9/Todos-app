import { useContext, useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import styles from "./Todo.module.scss";
import { TodosContext } from "../../context/TodosContext";
import AddTodoModal from "../AddTodoModal";

function Todo({ todo }) {
  const { onDeleteTodo, completeTodo } = useContext(TodosContext);
  const { title, createdTime, createdAt } = todo;
  const [showModal, setShowModal] = useState(false);

  const todoTitleClass = todo.completed ? styles.strikeThrough : "";

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onChecked = (e) => {
    completeTodo(todo.id);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  const handleEdit = () => {
    onOpenModal(true);
  };

  return (
    <>
      <AddTodoModal show={showModal} onClose={onCloseModal} todo={todo} />

      <div className={styles.container}>
        <div className={styles.detailsWrapper}>
          <label htmlFor={`checkTodo-${todo.id}`}>
            <input
              type="checkbox"
              name="check-todo"
              id={`checkTodo-${todo.id}`}
              checked={todo.completed}
              onChange={onChecked}
            />
          </label>

          <div>
            <p className={todoTitleClass}>{title}</p>
            <p>
              {createdTime}, {createdAt}
            </p>
          </div>
        </div>

        <div className={styles.actionsWrapper}>
          <span>
            <MdDelete onClick={handleDelete} />
          </span>
          <span>
            <MdModeEditOutline onClick={handleEdit} />
          </span>
        </div>
      </div>
    </>
  );
}

export default Todo;
