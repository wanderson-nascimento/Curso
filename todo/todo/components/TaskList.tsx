import React from "react";
import styles from './TaskList.module.css'
import clipboard from '../src/assets/Clipboard.png'
import { CheckCircle, Circle, ThumbsUp, Trash } from "@phosphor-icons/react"




export function TaskList({ id, isFinished, text, onDeleteTask, onCheckTask }) {

    function handleDeleteTask() {
        onDeleteTask(text);
    }

    function handleCheckTask(){
        console.log(`o id para mudança de estado é ${id}`)
        onCheckTask(id)
    }


    return (
        <div className={styles.tasklist}>
            <main>
                <div className={styles.element}>
                    <label className={styles.elementkey}>
                        <button onClick={handleCheckTask} className={styles.checkbox}>
                            {isFinished ?  <CheckCircle size={24}/> : 
                             <Circle size={24}/>}
                        </button>
                        <span>
                            {text}
                        </span>
                    </label>
                    <button  onClick={handleDeleteTask} title="Deletar task">
                        <Trash size={24}/>
                    </button>
                </div>
            </main>
        </div>
    )
}