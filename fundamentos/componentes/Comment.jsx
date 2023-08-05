import { ThumbsUp, Trash } from "@phosphor-icons/react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"



export function Comment({name, imageURL, commetedAt, commentContent}) {
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src={imageURL}
                alt="Foto do perfil do post"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{name}</strong>
                            <time title={commetedAt} dataTime="2023-07-23 08:24:11" >Cerca de 2h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        {commentContent}
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