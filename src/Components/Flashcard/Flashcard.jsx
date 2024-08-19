import { useState } from "react"
import styles from "./Flashcard.module.css"
export default function Flashcard () {
    const [isClicked, setisClicked] = useState(false);
    function handleClick(){
        console.log('(.)(.)')
    }
    
    return ( <>
            <div onClick = {handleClick} className={styles.question}>
                <p className={styles.cross}>❌</p>
                <div className={styles.textBox}>
                    <p className={styles.emoji}>🤔</p>
                    <h3 className={styles.questionText}>What is JSX?</h3>
                </div>
            </div>
            {/* /* // Answer card below */ }
            <div className={styles.answer}>
                <p className={styles.cross}>❌</p>
                <div className={styles.textBox}>
                    <p className={styles.emoji}>🤔</p>
                    <h3 className={styles.questionText}>What is JSX?</h3>
                </div>
            </div>
            </>
) 
} 