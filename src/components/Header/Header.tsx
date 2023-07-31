import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { RouteKey } from "../../navigation/routes";
import { TodoLogo } from "../Icons";

import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.headerElement}>
      <a href={RouteKey.Todos}>
        <TodoLogo className={styles.icon} />
      </a>
    </header>
  );
};

export default Header;
