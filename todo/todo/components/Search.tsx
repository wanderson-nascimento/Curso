import React from "react";
import styles from './Search.module.css'
import plus from '../src/assets/plus.svg'

export function Search() {
    return (
        <>
            <main className={styles.search}>
                <input 
                    placeholder="Adicione uma nova tarefa"
                />
                <button> Criar <img src={plus} />
                </button>
            </main >
        </>
    )
}