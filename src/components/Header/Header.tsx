import Button from "../Button";
import { TodoLogo } from "../Icons";

import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.headerElement}>
      <TodoLogo className={styles.icon} />
      <Button buttonName="Add Todo" type="submit" />
    </header>
  );
};

export default Header;
