import styles from './Header.module.css'

import igniteLogo from '../src/assets/ignite-logo.svg'

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={igniteLogo} alt="Logo do ignite"/>
                Ignite Feed
            </header>
        </div>
    )

}