import styles from "./Flashcard.module.css"

export default function Flashcard () {
    return (
            <div className={styles.question}>
                <p className={styles.cross}>❌</p>
                <div className={styles.textBox}>
                    <p className={styles.emoji}>🤔</p>
                    <h3 className={styles.questionText}>What is JSX?</h3>
                </div>
            </div>
    )
}