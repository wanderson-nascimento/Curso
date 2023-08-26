import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { TaskList } from '../components/TaskList'
import clipboard from '../src/assets/Clipboard.png'
import styles from './App.module.css'

import './global.css'

const listaDeTarefas = [
  {
    id: 1,
    isFinished: false,
    text: 'Wanderson Nascimento turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 1,
    isFinished: false,
    text: 'Nayara loiuse Floriano Nascimento libero auctor neque turpis turpis semper. Duis vel sed fames integer.',

  }
]


function App() {

  return (
    <>
      <Header />
      <div>
        <Search />
        <main>
          <header>
            <div className={styles.headerelements}>
              <p className={styles.azul}>Tarefas criardas</p> <span>0</span>
            </div>
            <div className={styles.headerelements}>
              <p className={styles.roxo}>Concluídas</p> <span>0</span>
            </div>
          </header>
          {
            listaDeTarefas.map(tarefa => {
              return (
                <TaskList
                  key={tarefa.id}
                  isFinished={tarefa.isFinished}
                  text={tarefa.text}
                />
              )
            })
          }
        </main>
        <div>
          <img
            src={clipboard} alt="icone do clipboard"
          />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </>
  )
}

export default App
