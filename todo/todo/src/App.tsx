import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { TaskList } from '../components/TaskList'
import clipboard from '../src/assets/Clipboard.png'
import styles from './App.module.css'
import { useState } from 'react'

import './global.css'

interface listaDeTarefasObj {
  id: number,
  isFinished: boolean,
  text: string
}



function App() {

  const [listaDeTarefas, setListaDeTarefas] = useState<listaDeTarefasObj[]>([
    {
      id: 1,
      isFinished: false,
      text: 'Estudar React com Julio',
    },
    {
      id: 2,
      isFinished: true,
      text: 'Colocar água nas plantas',

    },
    {
      id: 3,
      isFinished: true,
      text: 'Levar o lixo para fora',

    }
  ])


  const quantidadeCompletas: Array<listaDeTarefasObj> =
    listaDeTarefas.filter(
      tarefa => (tarefa.isFinished === true)
    )



  const [mensagem, setMensagem] = useState('');

  const newListaDeTarefas = listaDeTarefas;

  function onAddTask(novaMensagem: string) {
    const textAlreadyExist = listaDeTarefas.some((task) => task.text === novaMensagem)
    if (!textAlreadyExist) {
      setMensagem(novaMensagem)
      modifyObject(listaDeTarefas, novaMensagem)
    } else {
      alert('Já existe uma task com essa descrição')
    }
  }

  function modifyObject(listaDeTarefas: listaDeTarefasObj[], novaMensagem: string) {

    newListaDeTarefas.push(
      {
        id: listaDeTarefas.length + 1,
        isFinished: false,
        text: novaMensagem,
      }
    )
    setListaDeTarefas(newListaDeTarefas)
    orderTaskAccordinToFinishedStatus(newListaDeTarefas);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = listaDeTarefas.filter(
      task => {
        return task.text !== taskToDelete
      }
    )
    for (let i = 0; i < tasksWithoutDeletedOne.length; i++) {
      tasksWithoutDeletedOne[i].id = i + 1;
    }
    setListaDeTarefas(tasksWithoutDeletedOne)
  }

  function changeStateTask(id: number) {
    const taskListChanged = listaDeTarefas.map(task => {
      if (task.id === id) {
        const newCheckedState = !task.isFinished

        return (
          { ...task, isFinished: newCheckedState }

        )

      }
      return task
    })

    setListaDeTarefas(taskListChanged)
    orderTaskAccordinToFinishedStatus(taskListChanged);

  }

  function orderTaskAccordinToFinishedStatus(taskListToBeSorted:listaDeTarefasObj[]) {
    const orderedTaskList = taskListToBeSorted.slice();
    orderedTaskList.sort((a, b) => (a.isFinished === b.isFinished ? 0 : a.isFinished ? 1 : -1))
    setListaDeTarefas(orderedTaskList)
    console.log('A lista foi ordenada')
  }

  return (
    <>
      <Header />
      <div>

        <Search addTask={onAddTask} />

        <header className={styles.tasklistheader}>
          <div className={styles.headerelements}>
            <p className={styles.azul}>Tarefas criardas</p> <span>{listaDeTarefas.length}</span>
          </div>
          <div className={styles.headerelements}>
            <p className={styles.roxo}>Concluídas</p> {
              listaDeTarefas.length == 0 ? <span>{listaDeTarefas.length}</span> : <span>{quantidadeCompletas.length} de {listaDeTarefas.length}</span> 
            }
          </div>
        </header>
        {listaDeTarefas.length > 0 ?
          <main>
            {
              listaDeTarefas.map(tarefa => {
                return (
                  <TaskList
                    id={tarefa.id}
                    isFinished={tarefa.isFinished}
                    text={tarefa.text}
                    onDeleteTask={deleteTask}
                    onCheckTask={changeStateTask}
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
