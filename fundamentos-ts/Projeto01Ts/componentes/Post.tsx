import styles from "./Post.module.css"
import { Comment } from './Comment.js'
import { Avatar } from "./Avatar.js"
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState, FormEvent, ChangeEvent } from "react"

interface PostProps {
    author: Author, 
    content: Content, 
    publishedAt: Date,
}

interface Author {
    name: string,
    role: string,
    imageURL: string
}

interface Content{
    paragraph: string,
    link: string,
    hashtags: string
}


export function Post({ author, content, publishedAt }: PostProps) {
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

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('')

    }


    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
       event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeleteOne = comments.filter(commentToMap => {
            return commentToMap != commentToDelete

        })

        setComments(commentsWithoutDeleteOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                <time title={publishedDataFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
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
                        onInvalid={handleNewCommentInvalid}
                        required
                    >
                    </textarea>

                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </form>
            </footer>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            name={'Wanderson Nascimento'}
                            imageURL={'https://avatars.githubusercontent.com/u/88212277?v=4'}
                            key={comment}
                            commetedAt={'2023-08-05 22:00:00'}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />)
                })}
            </div>
        </article>
    )
}