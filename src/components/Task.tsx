import { Trash } from "phosphor-react";
import { TaskType } from "../@types";
import styles from "./Task.module.scss";

type TaskProps = {
  task: TaskType;
  onDone: (task: TaskType) => void;
  onDeleteTask: (task: TaskType) => void;
};

export function Task({ task, onDone, onDeleteTask }: TaskProps) {
  function handleTaskDoneChange() {
    onDone(task);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={`${styles.task} ${task.done ? styles.taskDone : ""}`}>
      <label className={styles.formControl}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={handleTaskDoneChange}
        />
      </label>
      <span className={styles.taskText}>{task.title}</span>

      <button className={styles.btnDeleteTask} onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
