import React from "react";
import styles from './Search.module.css'

export function Search() {
    return (
        <>
            <main className={styles.search}>
                <input
                    placeholder="Adicione uma nova tarefa"
                />
                <button > Criar +
                </button>
            </main >
        </>
    )
}