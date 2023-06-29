import { Calendar } from '@/public/assets/sidebar'
import styles from '@/styles/Home.module.scss'

function EventBar() {
	const event = [
		{
			title: 'Hellow world',
			date: '01.06',
		},
		{
			title: 'Hellow world',
			date: '01.06',
		},
		{
			title: 'Hellow world',
			date: '01.06',
		},
	]
	return (
		<>
			<div className={styles.profile_event}>
				<h5>Предстоящие события</h5>
				{event.map((item) => (
					<div className={styles.profile_one}>
						<Calendar />
						<div>
							<text>{item.title}</text>
							<caption>{item.date}</caption>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default EventBar
