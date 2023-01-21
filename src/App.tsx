import { PlusCircle } from "phosphor-react";
import styles from "./App.module.scss";
import { Header } from "./components/Header";

function App() {
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
      </div>
    </div>
  );
}

export default App;
