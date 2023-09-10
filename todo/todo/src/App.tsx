import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { TaskList } from '../components/TaskList'
import clipboard from '../src/assets/Clipboard.png'
import styles from './App.module.css'
import {useState} from 'react'

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
      text: 'Varios testes turpis semper. Duis vel sed fames integer.',
  
    }
  ])
  
    
    const quantidadeCompletas:Array<listaDeTarefasObj> = 
    listaDeTarefas.filter(
    tarefa => (tarefa.isFinished === true)
  )
  
  

  const [mensagem, setMensagem] = useState('');

  const newListaDeTarefas = listaDeTarefas;

  function modifyObject(listaDeTarefas:listaDeTarefasObj[], novaMensagem:string){
    newListaDeTarefas.push(
      {
        id: listaDeTarefas.length + 1,
        isFinished: false,
        text: novaMensagem,  
      }
    )
    console.log(mensagem, listaDeTarefas)
    setListaDeTarefas(newListaDeTarefas)
  }

  function onAddTask(novaMensagem: string){
    setMensagem(novaMensagem)
    modifyObject(listaDeTarefas, novaMensagem)
  }

  function deleteTask(taskToDelete:string){
    const  tasksWithoutDeletedOne = listaDeTarefas.filter(
      task => {
        return task.text !== taskToDelete
      }
    )
      for(let i=0; i<tasksWithoutDeletedOne.length; i++){
        tasksWithoutDeletedOne[i].id = i+1;
        console.log(tasksWithoutDeletedOne)
      }
    setListaDeTarefas(tasksWithoutDeletedOne)
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
                    onDeleteTask={deleteTask}
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
