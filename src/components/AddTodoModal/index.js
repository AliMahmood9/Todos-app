import React, { useContext, useState } from "react";
import styles from "./AddTodoModal.module.scss";
import { TodosContext } from "../../context/TodosContext";
import { ACTIONS } from "../../constants";

function AddTodoModal({ show, onClose, todo }) {
  const [title, setTitle] = useState(todo ? todo.title : "");
  const { addTodo, updateTodo } = useContext(TodosContext);

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { title, id: 5 };
    todo ? updateTodo({ ...todo, title }) : addTodo(data);
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <form onSubmit={onSubmit}>
          <h4>Add Todo</h4>
          <div className={styles.formGroup}>
            <label>Enter Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={onChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddTodoModal;
