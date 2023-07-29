import { MouseEventHandler } from "react";

import styles from "./Buton.module.css";

type ButtonProps = {
  buttonName: string;
  type: "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ buttonName, type, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
