import { Field, ErrorMessage } from "formik";

import styles from "./TodoField.module.css"

type TodoFieldProps = {
  name: string;
  placeholder: string;
};

const TodoField = (props: TodoFieldProps): JSX.Element => {
  const { name, placeholder, ...rest } = props;
  return (
    <div className={styles.fieldWrapper}>
      <Field
        className={styles.textInputField}
        name={name}
        {...rest}
        placeholder={placeholder}
        type="text"
      ></Field>
      <ErrorMessage className={styles.fieldError} name={name} />
    </div>
  );
};

export default TodoField;
