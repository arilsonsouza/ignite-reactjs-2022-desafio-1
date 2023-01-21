import { Trash } from "phosphor-react";
import { TaskType } from "../@types";
import styles from "./Task.module.scss";

type TaskProps = {
  task: TaskType;
};

export function Task({ task }: TaskProps) {
  return (
    <div className={`${styles.task}`}>
      <label className={styles.formControl}>
        <input type="checkbox" checked={task.done} />
      </label>
      <span className={styles.taskText}>{task.title}</span>

      <button className={styles.btnDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
