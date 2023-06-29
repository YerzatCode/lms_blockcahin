import styles from '@/styles/calendar.module.scss'

function Header({ todayHandler, nextHandler, prevHandler, today }) {
	const month = today.format('MMMM')
	const year = today.format('YYYY')
	return (
		<div className={styles.header}>
			<h1>{month}</h1>

			<button onClick={prevHandler}>&lt;</button>
			<button onClick={todayHandler}>today</button>
			<button onClick={nextHandler}>&gt;</button>
		</div>
	)
}

export default Header
