import { Field, ErrorMessage } from "formik";

import styles from "./TodoInputField.module.css";

type TodoInputFieldProps = {
  name: string;
  placeholder: string | undefined;
};

const TodoInputField = (props: TodoInputFieldProps): JSX.Element => {
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

export default TodoInputField;
