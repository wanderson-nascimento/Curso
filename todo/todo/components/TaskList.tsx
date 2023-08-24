import React from "react";
import styles from './TaskList.module.css'

export function TaskList(){
    return(
        <article className={styles.tasklist}>
            <header>
                <p>Tarefas criardas 0</p>
                <p>Concluídas 0</p>
            </header>
            <main>
                <p>Icone</p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </main>
        </article>
    )
}