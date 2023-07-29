// import { getTodo } from "../../api/todos";

import { DeleteIcon, EditIcon } from "../Icons";
import styles from "./Todo.module.css";

//{ id, description, complete }: Todo
const Todo = (): JSX.Element => {
  return (
    <div className={styles.todo}>
      Go for a walk with doggy
      <div className={styles.icons}>
        <div className={styles.editIcon}>
          <EditIcon />
        </div>
        <div>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default Todo;
