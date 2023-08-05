import styles from "./Post.module.css"
import { Comment } from './Comment.jsx'
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from "react"



export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([
        'Ficou excelente esse comentário',
        'Outro comentário interessante'
    ])

    const [newCommentText, setNewCommentText] = useState('')


    const publishedDataFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('')

    }


    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.imageURL}
                        alt="Foto do perfil"
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDataFormatted} datatime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                <p>{content.paragraph}</p>
                <p><a href="#">{content.link}</a></p>
                <p>
                    {content.hashtags}
                </p>
            </div>
            <footer>
                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea
                        name="comment"
                        placeholder="Nossa, adorei amigo! Parabéns"
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                    >
                    </textarea>

                    <button>Publicar</button>
                </form>
            </footer>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            commentContent={comment}
                        />)
                })}
            </div>
        </article>
    )
}