import { Trash } from "phosphor-react";
import styles from "./Task.module.scss";

export function Task() {
  return (
    <div className={`${styles.task}`}>
      <label className={styles.formControl}>
        <input type="checkbox" />
      </label>
      <span className={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>

      <button className={styles.btnDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
