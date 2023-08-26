import React from "react";
import styles from './TaskList.module.css'
import clipboard from '../src/assets/Clipboard.png'
import trash from '../src/assets/trash.svg'

interface listaDeTarefasProps {
    key: number,
    isFinished: boolean,
    text: string,

}


export function TaskList({ key, isFinished, text }: listaDeTarefasProps) {
    return (
        <div className={styles.tasklist}>
            <main>
                <div className={styles.element}>
                    <label>
                        <input type="checkbox" />
                        <span>
                            {text}
                        </span>
                    </label>
                    <img src={trash} alt="icone de lixo" />
                </div>
            </main>
        </div>
    )
}