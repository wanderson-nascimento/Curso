import { ThumbsUp, Trash } from "@phosphor-icons/react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/88212277?v=4"
                alt="Foto do perfil do post"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon Lane</strong>
                            <time title="23 de julho às 08:13" dataTime="2023-07-23 08:24:11" >Cerca de 2h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        Muito bom Devon, parabéns!! 👏👏
                    </p>

                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>
            </div>

        </div>
    )
}