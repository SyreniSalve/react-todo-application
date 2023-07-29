import Todo from "../components/Todo";
import styles from "./TodoItemContainer.module.css";

const TodoItemContainer = (): JSX.Element => {
  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.title}>What's your Plans for Today?</h1>
      <Todo />
    </div>
  );
};

export default TodoItemContainer;
