import React from "react";
import styles from './TaskList.module.css'
import clipboard from '../src/assets/Clipboard.png'
import { CheckCircle, ThumbsUp, Trash } from "@phosphor-icons/react"




export function TaskList({ key, isFinished, text, onDeleteTask }) {

    function handleDeleteTask() {
        console.log(`Chamada de função handleDeleteTask ${text} `);
        onDeleteTask(text);
    }


    return (
        <div className={styles.tasklist}>
            <main>
                <div className={styles.element}>
                    <label className={styles.elementkey}>
                        <button className={styles.checkbox}>
                            <CheckCircle size={24}/>
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