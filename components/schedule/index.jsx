import styles from '@/styles/calendar.module.scss'
import moment from 'moment'
import { useState } from 'react'

import CalendarGrid from './gridCalendar'
import Header from './header'

function Calendar() {
	const [today, setToday] = useState(moment())
	const startDay = today.clone().startOf('month').startOf('week')

	const prevHandler = () => {
		setToday((prev) => prev.clone().subtract(1, 'month'))
	}
	const todayHandler = () => {
		setToday(moment())
	}
	const nextHandler = () => {
		setToday((prev) => prev.clone().add(1, 'month'))
	}
	return (
		<div className={styles.wrapper}>
			<Header
				today={today}
				prevHandler={prevHandler}
				todayHandler={todayHandler}
				nextHandler={nextHandler}
			/>
			<CalendarGrid startDay={startDay} today={today} />
		</div>
	)
}

export default Calendar
