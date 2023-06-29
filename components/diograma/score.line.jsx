import { Line } from '@/public/assets/progressbar'
import styles from '@/styles/Home.module.scss'
import { score } from './score.data'

function Score() {
	return (
		<>
			{score.map((item) => (
				<div className={styles.score}>
					<Line value={item.value} />
					<caption>{item.date}</caption>
				</div>
			))}
		</>
	)
}

export default Score
