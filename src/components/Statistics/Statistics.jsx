import styles from "./Statistics.module.css"

function Statistics ({good, neutral, bad, total, positivePercentage}){
    return(
        <div className={styles['statisticsContainer']}> 
            <ul className={styles['statisticItems']}>
                <li className={styles.item}>{`Good: ${good}`}</li>
                <li className={styles.item}>{`Neutral: ${neutral}`}</li>
                <li className={styles.item}>{`Bad: ${bad}`}</li>
                <li className={styles.item}>{`Total: ${total}`}</li>
                <li className={styles.item}>{`Positive Feedback: ${positivePercentage.toFixed(1)} %`}</li>
            </ul>
        </div>
    )
}
export default Statistics;