import { Formik, Form } from "formik";
import TodoInputField from "../../fields/TodoInputField";
import styles from "./TodoAddFormContainer.module.css";
import Button from "../../components/Button";
import { RouteKey } from "../../navigation/routes";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import * as Yup from "yup";
import { postTodo } from "../../api/todos/todos";

const TodoAddFormContainer = (): JSX.Element => {
  const [todo] = useState({
    description: "",
  });

  const validation = Yup.object().shape({
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className={styles.todoContainer}>
      <a href={RouteKey.Todos} className={styles.backIconContainer}>
        <MdOutlineArrowBackIosNew className={styles.backIcon} />
      </a>

      <h1 className={styles.title}>Please Add a Todo</h1>
      <Formik
        initialValues={{ description: "" }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          todo.description = values.description;
          postTodo(todo);
          console.log(todo);
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <TodoInputField name="description" placeholder="Add a Todo" />
            <div className={styles.buttonContainer}>
              <Button
                buttonName="Add"
                disabled={isSubmitting}
                style={styles.submitButton}
                type="submit"
              ></Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoAddFormContainer;
