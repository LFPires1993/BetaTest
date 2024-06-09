import Link from "next/link";
import styles from "./page.module.css";

export function HeaderComponent() {
    return (
        <header className={styles.header}>
            <Link
                href={'/management'}
            >
                <button className={styles.button}>
                    Novo item
                </button>
            </Link>
            <button className={styles.button}>Entrar</button>
        </header>
    )
}