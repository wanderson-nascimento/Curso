import { ThumbsUp, Trash } from "@phosphor-icons/react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"



export function Comment({ name, imageURL, commetedAt, content, onDeleteComment }) {

    function handleDeleteComment() {
        console.log(`Chamada de função handleDeleteComment ${content} `)
        onDeleteComment(content)
    }


    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src={'https://avatars.githubusercontent.com/u/88212277?v=4'}
                alt="Foto do perfil do post"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{'Wanderson Nascimento'}</strong>
                            <time title={'2023-08-05 22:00:00'} datatime="2023-07-23 08:24:11" >Cerca de 2h</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        {content}
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