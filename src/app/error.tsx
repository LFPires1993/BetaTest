'use client'
import styles from "./page.module.css";

import Link from "next/link";

export default function Error() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ops... algo deu errado!</h1>
      <Link href='/'><button className={styles.button}>Voltar para o ínicio</button></Link>
    </div>
  )
}
