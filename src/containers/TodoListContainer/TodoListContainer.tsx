import { getTodos } from "../../api/todos";
import { useQuery } from "react-query";
import TodoElement from "./TodoElement";
import styles from "./TodoListContainer.module.css";
import Loader from "../../components/Loader";
import { JSX } from "react/jsx-runtime";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { RouteKey } from "../../navigation/routes";

const TodoListContainer = (): JSX.Element => {
  const { data, isLoading, isFetching, refetch } = useQuery("todo/list", () =>
    getTodos()
  );

  const navigate = useNavigate();

  if (isLoading || isFetching) {
    return <Loader />;
  }

  const todoAddHandler = () => {
    navigate(RouteKey.Add);
  };

  const renderTodos = () => {
    return data?.map((todo) => (
      <TodoElement
        key={todo.id}
        {...todo}
        onDeleteClick={todosRefetchHandler}
      />
    ));
  };

  const todosRefetchHandler = () => {
    refetch();
  };

  return (
    <div className={styles.todoContainer}>
      <div>
        <h1 className={styles.title}>What's your Plans for Today?</h1>
        <div>{renderTodos()}</div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          buttonName="Add Todo"
          style={styles.button}
          type="submit"
          onClick={todoAddHandler}
        />
      </div>
    </div>
  );
};

export default TodoListContainer;
