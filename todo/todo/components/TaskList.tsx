import styles from './TaskList.module.css'
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react"


interface listaDeTarefasProps{
    id: number,
    isFinished: boolean,
    text: string,
    onDeleteTask: (text:string) => void
    onCheckTask: (id:number) => void
  }

export function TaskList({ id, isFinished, text, onDeleteTask, onCheckTask }:listaDeTarefasProps) {
    function handleDeleteTask() {
        onDeleteTask(text);
    }

    function handleCheckTask(){
        onCheckTask(id)
    }

    const textStyles = isFinished ? styles.textDone:styles.elementkey

    return (
        <div className={styles.tasklist}>
            <main>
                <div className={styles.element}>
                    <div className={textStyles}>
                        <button onClick={handleCheckTask} className={styles.checkbox}>
                            {isFinished ?  <CheckCircle size={24}/> : 
                             <Circle size={24}/>}
                        </button>
                        <span>
                            {text}
                        </span>
                    </div>
                    <button  onClick={handleDeleteTask} title="Deletar task">
                        <Trash size={24}/>
                    </button>
                </div>
            </main>
        </div>
    )
}