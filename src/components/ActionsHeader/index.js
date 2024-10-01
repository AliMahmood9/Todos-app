import { useCallback, useContext, useState } from "react";
import styles from "./Actions.module.scss";
import { TodosContext } from "../../context/TodosContext";

const ActionsHeader = ({ onOpenModal }) => {
  const [filterValue, setSortValue] = useState("all");
  const { filterCompleted } = useContext(TodosContext);

  const onChangeHandler = (e) => {
    setSortValue(e.target.value);
    filterCompleted();
  };

  return (
    <div className={styles.container}>
      <button onClick={onOpenModal}>Add Task</button>
      <select onChange={onChangeHandler} value={filterValue}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default ActionsHeader;
