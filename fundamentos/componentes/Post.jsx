import styles from "./Post.module.css"
import { Comment } from './Comment.jsx'
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export function Post({ author, content, publishAt }) {
    const publishedDataFormatted = format(publishAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
        addSuffix: true
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
        locale: ptBR,
    })

    console.log(publishedDataFormatted)

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
                <time title={publishedDataFormatted} dataTime={publishAt.toISOString()} >{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                <p>{content.paragraph}</p>
                <p><a href="#">{content.link}</a></p>
                <p>
                    {content.hashtags}
                </p>
            </div>
            <footer>
                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea placeholder="Nossa, adorei amigo! Parabés" ></textarea>

                    <button>Publicar</button>
                </form>
            </footer>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}