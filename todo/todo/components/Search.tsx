import React, { useState } from "react";
import styles from './Search.module.css'
import plus from '../src/assets/plus.svg'

export function Search(props) {

    const [newTask, setNewTask] = useState('')

    function handleSubmitCreateNewTask(event){
        event.preventDefault();
        props.addTask(newTask)
    }

    // function addTask(newTask: string){
    //     console.log('adionar a task', newTask)

    // }

    function handleNewTask(event){
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