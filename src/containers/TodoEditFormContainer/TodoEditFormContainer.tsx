import { MdOutlineArrowBackIosNew } from "react-icons/md";

import styles from "./TodoEditFormContainer.module.css";
import { RouteKey } from "../../navigation/routes";
import { Form, Formik } from "formik";
import TodoInputField from "../../fields";
import Button from "../../components/Button";
import { useState } from "react";
import { TodoResponse } from "../../api/todos/types";
import axios from "axios";
import Checkbox from "../../components/checkbox/Checkbox";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getTodo } from "../../api/todos";
import Loader from "../../components/Loader";


const TodoEditFormContainer = (): JSX.Element => {
  const params = useParams<"id">();
  const { data, isLoading, isFetching } = useQuery("todo", () =>
    getTodo(params.id || "")
  );

  if (isLoading || isFetching) {
    <Loader />;
  }
 
  const [todo] = useState({
    id: "",
    description: "",
    complete: false,
  });

  const [isComplete, setIsComplete] = useState(false);

  const editTodo = async (todo: TodoResponse): Promise<void> => {
    await axios.put<void>(`${process.env.REACT_APP_API_URL}/todo/${data?.id}`, todo)
  }

  return (
    <div className={styles.todoContainer}>
      <a href={RouteKey.Todos} className={styles.backIconContainer}>
        <MdOutlineArrowBackIosNew className={styles.backIcon} />
      </a>

      <h1 className={styles.title}>Edit or End a Todo</h1>
      <Formik
        initialValues={{ description: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          todo.description = values.description;
          todo.complete = isComplete;
          console.log(todo);
          editTodo(todo);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <Checkbox label="mark checkbox if you have completed the todo" 
            checked={isComplete}
            onChange={() => { setIsComplete((complete) => !complete) }}/>
            <TodoInputField
              name="description"
              placeholder={data?.description}
            />
            <div className={styles.buttons}>
              <Button
                buttonName="Edit"
                disabled={isSubmitting}
                style={styles.editButton}
                type="submit"
              ></Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoEditFormContainer;
