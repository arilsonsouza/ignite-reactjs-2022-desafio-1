import styles from "./Header.module.scss";

import logo from "../assets/images/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />{" "}
      <strong>
        to<span>do</span>
      </strong>
    </header>
  );
}
