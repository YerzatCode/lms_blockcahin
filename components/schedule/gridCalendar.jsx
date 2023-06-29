import styles from '@/styles/calendar.module.scss'
import moment from 'moment'

function CalendarGrid({ startDay, today }) {
	const totalDays = 42
	const now = moment()

	const day = startDay.clone()
	const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone())

	const currentDay = (d) => now.isSame(d, 'day')
	const monthSelect = (d) => today.isSame(d, 'month')

	console.log(monthSelect())
	return (
		<div className={styles.calendar}>
			{[...Array(7)].map((_, index) => (
				<div key={index} className={styles.week}>
					{now
						.clone()
						.day(index + 1)
						.format('ddd')}
				</div>
			))}
			{daysArray.map((dayItem) => (
				<div className={styles.days} key={dayItem.format('DDMMYYYY')}>
					{!currentDay(dayItem) && (
						<div
							className={!monthSelect(dayItem) ? styles.deselect : styles.day}>
							{' '}
							{dayItem.format('D')}
						</div>
					)}
					{currentDay(dayItem) && (
						<p className={styles.day_current}> {dayItem.format('D')}</p>
					)}

					{/* <div className='todo'></div> */}
				</div>
			))}
		</div>
	)
}

export default CalendarGrid
