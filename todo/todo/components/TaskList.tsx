import React from "react";
import styles from './TaskList.module.css'
import clipboard from '../src/assets/Clipboard.png'

export function TaskList(){
    return(
        <div className={styles.tasklist}>
            <header>
                <p>Tarefas criardas 0</p>
                <p>Concluídas 0</p>
            </header>
            <main>
                <img
                    src={clipboard} alt="icone do clipboard"
                />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </main>
        </div>
    )
}