import { MouseEventHandler } from "react";

import styles from "./Buton.module.css";
import { parseMultipleClassNames } from "../../utils/styleUtils";

type ButtonProps = {
  buttonName: string;
  disabled?: boolean;
  style: string;
  type: "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({
  buttonName,
  disabled = false,
  style,
  type,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={parseMultipleClassNames([styles.button, style])}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
