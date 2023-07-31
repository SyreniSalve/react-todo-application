import { useMutation } from "react-query";
import { deleteTodo } from "../../api/todos/todos";
import { TodoResponse } from "../../api/todos/types";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import styles from "./TodoElement.module.css";
import { RouteKey } from "../../navigation/routes";
import { Link, generatePath } from "react-router-dom";
import { parseMultipleClassNames } from "../../utils/styleUtils";

const TodoElement = ({
  id,
  description,
  complete,
  onDeleteClick,
}: TodoResponse): JSX.Element => {
  const todoEditLink = generatePath(RouteKey.Edit, { id: `${id}` });

  const { mutate: removeTodo } = useMutation(deleteTodo, {
    onSuccess: onDeleteClick,
  });

  const removeTodoHandler = async () => {
    return removeTodo(id || "");
  };

  return (
    <div
      className={
        complete
          ? parseMultipleClassNames([styles.todo, styles.complete])
          : styles.todo
      }
      key={id}
    >
      {description}
      <div className={styles.icons}>
        <Link
          className={!complete ? styles.link : styles.nonActiveLink}
          to={!complete ? todoEditLink : RouteKey.Todos}
        >
          <MdEdit className={styles.editIcon} />
        </Link>
        <AiFillDelete
          className={!complete ? styles.deleteIcon : styles.redDeleteIcon}
          onClick={removeTodoHandler}
        />
      </div>
    </div>
  );
};

export default TodoElement;
