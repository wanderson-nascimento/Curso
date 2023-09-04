import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { TaskList } from '../components/TaskList'
import clipboard from '../src/assets/Clipboard.png'
import styles from './App.module.css'
import React, {useState} from 'react'

import './global.css'

interface listaDeTarefasObj{
  id: number,
  isFinished: boolean,
  text: string,
}

type listaDeTarefasProps = listaDeTarefasObj[] 

const listaDeTarefas:listaDeTarefasProps = [
  {
    id: 1,
    isFinished: false,
    text: 'Wanderson Nascimento turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 2,
    isFinished: true,
    text: 'Nayara loiuse Floriano Nascimento libero auctor neque turpis turpis semper. Duis vel sed fames integer.',

  },
  {
    id: 3,
    isFinished: true,
    text: 'Eita coizinha linda de jesus libero auctor neque turpis turpis semper. Duis vel sed fames integer.',

  }
]

  
  const quantidadeCompletas:listaDeTarefasProps = 
  listaDeTarefas.filter(
  tarefa => (tarefa.isFinished === true)
)




function App() {

  const [mensagem, setMensagem] = useState('');

  function onAddTask(novaMensagem: string){
    setMensagem(novaMensagem)
    console.log(`mensagem dentro da função onAddTask de App(pai) ${mensagem} `)
  }

  return (
    <>
      <Header />
      <div>
        <Search addTask={onAddTask}/>
        <header className={styles.tasklistheader}>
          <div className={styles.headerelements}>
            <p className={styles.azul}>Tarefas criardas</p> <span>{listaDeTarefas.length}</span>
          </div>
          <div className={styles.headerelements}>
            <p className={styles.roxo}>Concluídas</p> <span>{quantidadeCompletas.length} de {listaDeTarefas.length}</span>
          </div>
        </header>
        {listaDeTarefas.length > 0 ?
          <main>
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
          </main> :
          <div className={styles.listavazia}>
            <img
              src={clipboard} alt="icone do clipboard"
            />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        }

      </div>
    </>
  )
}

export default App
