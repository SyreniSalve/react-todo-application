import { Formik, Form } from "formik";
import TodoField from "../../../fields/TodoField/TodoField";

const AddTodoForm = (): JSX.Element => {
  return (
    <Formik
      initialValues={{ text: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({}) => (
        <Form>
          <TodoField name="text" placeholder="Add a todo"></TodoField>
        </Form>
      )}
    </Formik>
  );
};

export default AddTodoForm;
