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



function App() {

  const [listaDeTarefas, setListaDeTarefas] = useState<listaDeTarefasObj[]>([
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
  ])
  
    
    const quantidadeCompletas:Array<listaDeTarefasObj> = 
    listaDeTarefas.filter(
    tarefa => (tarefa.isFinished === true)
  )
  
  

  const [mensagem, setMensagem] = useState('');

  function modifyObject(listaDeTarefas:listaDeTarefasObj[]){
    console.log(mensagem, listaDeTarefas )
    const newListaDeTarefas = listaDeTarefas
  }

  function onAddTask(novaMensagem: string, listaDeTarefas:listaDeTarefasObj[]){
    setMensagem(novaMensagem)
    modifyObject(listaDeTarefas)
  }


  return (
    <>
      <Header />
      <div>
        <Search addTask={onAddTask}/>
        <h1>Mensagem do Pai: {mensagem}</h1>
        <h2>{newListaDeTarefas[0].text}</h2>
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
