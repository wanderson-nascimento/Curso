import styles from './Header.module.css'
import rocket from '../src/assets/rocket.png'


export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={rocket} alt='Logo de foguete'/>
                <p className={styles.azul}>to</p><p className={styles.roxo}>do</p>
            </header>
        </>
    )
}