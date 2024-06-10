import styles from "./page.module.css";

export default function Loading() {
  return (
    <div className={styles.loading_container}>
        <div className={styles.loading}></div>
    </div>
  )
}
