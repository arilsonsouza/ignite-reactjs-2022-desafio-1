import { ClipboardText, PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([1, 2, 3, 4, 5]);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.content}>
          <div className={styles.tasksInfo}>
            <div className={styles.tasksCreated}>
              <strong>Tarefas criadas</strong>
              <span className={styles.tasksBadge}>5</span>
            </div>
            <div className={styles.tasksDone}>
              <strong>Concluídas</strong>
              <span className={styles.tasksBadge}>2 de 5</span>
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
                  <Task />
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
