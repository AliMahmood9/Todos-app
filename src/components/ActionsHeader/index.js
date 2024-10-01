import { useContext, useState } from "react";
import styles from "./Actions.module.scss";
import { TodosContext } from "../../TodosContext";

const ActionsHeader = () => {
  const [filterValue, setSortValue] = useState("all");
  const { onChangeTodo } = useContext(TodosContext);

  const onChangeHandler = (e) => {
    setSortValue(e.target.value);
    onChangeTodo({ action: "filter", value: filterValue });
  };

  return (
    <div className={styles.container}>
      <button>Add Task</button>
      <select onChange={onChangeHandler} value={filterValue}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default ActionsHeader;
