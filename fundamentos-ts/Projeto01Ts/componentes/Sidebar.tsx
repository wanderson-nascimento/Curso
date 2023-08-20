import styles from "./Sidebar.module.css"
import {Pencil} from "@phosphor-icons/react"
import { Avatar } from "./Avatar"

export function Sidebar() {
    return (
        <div>
            <aside className={styles.sidebar}>
                <img
                    className={styles.cover}
                    src="https://plus.unsplash.com/premium_photo-1661629473263-572abf51d7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
                    alt="Imagem de capa"
                />

                <div className={styles.profile}>
                    <Avatar
                        src="https://avatars.githubusercontent.com/u/88212277?v=4"
                        alt="Foto do perfil"
                    />

                    <strong>Wanderson Nascimento</strong>
                    <span>Web Developer</span>
                </div>

                <footer className={styles.footer}>
                    <a href="#">
                        <Pencil size={20}/>
                        Editar seu perfil 
                    </a>
                </footer>
            </aside>
        </div>
    )
}