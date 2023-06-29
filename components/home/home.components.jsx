import Score from '@/components/diograma/score.line'
import { Down, Radial } from '@/public/assets/faq'
import { Ava, Edit } from '@/public/assets/navbar'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Scrollbars from 'react-custom-scrollbars-2'
import EventBar from './event/event'

export default function HomeCom() {
	const meScore = ['4.1', '4.2', '4.8', '5.0', '3.4', '2.2']

	const procent = 20
	return (
		<>
			<div className='container'>
				<Scrollbars className='scroll_bar' autoHide>
					<h5>Привет, Никита 👋</h5>
					<h6>Пойдем учиться</h6>
					<div className='container_box'>
						<div>
							<h4>Режим</h4>

							<div className={styles.grey_box}>
								<ul>
									<li>5</li>
									<li>4</li>
									<li>3</li>
									<li>2</li>
									<li>1</li>
								</ul>
								<Score />
							</div>
						</div>
						<div>
							<h4>Режим</h4>

							<div className={styles.grey_box}>
								<div className={styles.circular}>
									<CircularProgressbar
										value={procent}
										strokeWidth={10}
										styles={buildStyles({
											pathColor: '#50D177',
											trailColor: '#f3f3f3',
											rotation: 0.78 + 1 / 100,
										})}
									/>
									<caption>Год</caption>
								</div>
								<div className={styles.circular}>
									<CircularProgressbar
										value={procent}
										strokeWidth={10}
										styles={buildStyles({
											pathColor: '#50D177',
											trailColor: '#f3f3f3',
											rotation: 0.78 + 1 / 100,
										})}
									/>
									<caption>Май</caption>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.ads}>Рекламный баннер</div>
					<div className={styles.faq}>
						<h2>FAQ</h2>
						<div className={styles.module}>
							Вопрос
							<div className={styles.down}>
								<Radial />
								<Down />
							</div>
						</div>
					</div>
				</Scrollbars>
			</div>
			<div className={styles.profile}>
				<div className={styles.profile_card}>
					<Image src={Ava} alt='' width={80} height={80} />
					<div className={styles.profile_edit}>
						Никита{' '}
						<button>
							<Edit />
						</button>
					</div>
					<div className={styles.profile_lvl}>
						{meScore.map((item) => (
							<div>
								{item}
								<p>Балл</p>
							</div>
						))}
					</div>
				</div>
				<EventBar />
			</div>
		</>
	)
}
