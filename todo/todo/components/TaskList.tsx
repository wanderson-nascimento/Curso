import React from "react";
import styles from './TaskList.module.css'
import clipboard from '../src/assets/Clipboard.png'
import trash from '../src/assets/trash.svg'

export function TaskList() {
    return (
        <div className={styles.tasklist}>
            <header>
                <div className={styles.headerelements}>
                    <p className={styles.azul}>Tarefas criardas</p> <span>0</span>
                </div>
                <div className={styles.headerelements}>
                    <p className={styles.roxo}>Concluídas</p> <span>0</span>
                </div>
            </header>
            <main>
                <div className={styles.element}>
                    <label>
                        <input type="checkbox" />
                        <span>
                            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        </span>
                    </label>
                    <img src={trash} alt="icone de lixo" />
                </div>
                <div className={styles.element}>
                    <label>
                        <input type="checkbox" />
                        <span>
                            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        </span>
                    </label>
                    <img src={trash} alt="icone de lixo" />
                </div>
                <div className={styles.element}>
                    <label>
                        <input type="checkbox" />
                        <span>
                            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        </span>
                    </label>
                    <img src={trash} alt="icone de lixo" />
                </div>
                <img
                    src={clipboard} alt="icone do clipboard"
                />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </main>
        </div>
    )
}