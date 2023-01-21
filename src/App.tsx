import { ChangeEvent, FormEvent, useState } from "react";
import { ClipboardText, PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskType } from "./@types";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const task: TaskType = {
      id: uuidv4(),
      title: taskTitle,
      done: false,
    };

    setTasks((previousTasks) => [...previousTasks, task]);
    setTaskTitle("");
  }

  function handleTaskTitleChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskTitle(event.target.value);
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  function onDoneTaskChange(task: TaskType) {
    const updatedTasks: TaskType[] = tasks.map((currentTask) => {
      if (currentTask.id === task.id) {
        return { ...currentTask, done: !task.done };
      }
      return currentTask;
    });

    setTasks(updatedTasks);
  }

  function onDeleteTask(task: TaskType) {
    const updatedTasks: TaskType[] = tasks.filter(
      (currentTask) => currentTask.id !== task.id
    );
    setTasks(updatedTasks);
  }

  const isTaskTitleEmpty = taskTitle.length === 0;
  const tasksQtd = tasks.length;
  const completedTasks = tasks.reduce((acc, task) => {
    if (task.done) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
            value={taskTitle}
            onChange={handleTaskTitleChange}
            onInvalid={handleNewTaskInvalid}
          />
          <button type="submit" disabled={isTaskTitleEmpty}>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.content}>
          <div className={styles.tasksInfo}>
            <div className={styles.tasksCreated}>
              <strong>Tarefas criadas</strong>
              <span className={styles.tasksBadge}>{tasksQtd}</span>
            </div>
            <div className={styles.tasksDone}>
              <strong>Concluídas</strong>
              <span className={styles.tasksBadge}>
                {completedTasks} de {tasksQtd}
              </span>
            </div>
          </div>
          <div className={styles.tasks}>
            {tasks.length === 0 ? (
              <div className={styles.tasksEmpty}>
                <ClipboardText size="3.5rem" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            ) : (
              <>
                {tasks.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    onDone={onDoneTaskChange}
                    onDeleteTask={onDeleteTask}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
