import styles from "./Actions.module.scss";

const ActionsHeader = () => {
  return (
    <div className={styles.container}>
      <button>Add Task</button>
      <select>
        <option value="All">All</option>
      </select>
    </div>
  );
};

export default ActionsHeader;
