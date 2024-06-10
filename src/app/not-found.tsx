import styles from "./page.module.css";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Página não encontrada</h1>
      <p className={styles.p}>A página que você tentou acessar, não existe!</p>
      <Link href='/'><button className={styles.button}>Voltar para o ínicio</button></Link>
    </div>
  )
}
