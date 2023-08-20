import { ThumbsUp, Trash } from "@phosphor-icons/react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import { useState } from "react"

interface CommentProps{
    name: string, 
    imageURL: string, 
    commetedAt: string, 
    content: string, 
    onDeleteComment: (comment: string) => void
}


export function Comment({ name, imageURL, commetedAt, content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeCount() {
        setLikeCount((prevLikeCount) => {
            return (
                prevLikeCount + 1
            )
        } )

        
    }


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
                            <time title={commetedAt} dateTime="2023-07-23 08:24:11" >Cerca de 2h</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>

                    <footer>
                        <button onClick={handleLikeCount}>
                            <ThumbsUp />
                            Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>

        </div>
    )
}