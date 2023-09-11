import  { useState } from "react";
import styles from './Search.module.css'
import plus from '../src/assets/plus.svg'

interface SearchProps{
    addTask: (newTask:string) => void
  }

export function Search(props:SearchProps) {

    const [newTask, setNewTask] = useState('')

    function handleSubmitCreateNewTask(event:any){
        event.preventDefault();
        props.addTask(newTask)
    }

    function handleNewTask(event:any){
        setNewTask(event.target.value)
    }


    return (
        <>
            <main className={styles.search}>
                <form onSubmit={handleSubmitCreateNewTask}>
                    <input
                        placeholder="Adicione uma nova tarefa"
                        name="taskName"
                        value={newTask}
                        onChange={handleNewTask}
                    />
                    <button> Criar <img src={plus} />
                    </button>
                </form>
            </main >
        </>
    )
}