import { Clock, File, LinkIcon, Video } from '@/public/assets/courses/infoBar'
import styles from '@/styles/Courses.module.scss'
import Image from 'next/image'
import Scrollbars from 'react-custom-scrollbars-2'

function MainCourses() {
	return (
		<Scrollbars className={styles.container} autoHide>
			<h4>Все курсы</h4>
			<div className={styles.container_courses}>
				<div className={styles.courses}>
					<Image src={''} alt className={styles.courses_img} />
					<h5>Название курса</h5>
					<div className={styles.courses_info_bar}>
						<div className={styles.info}>
							<Image src={Clock} alt='/' width={20} height={20} />
							<text>2 месяца</text>
						</div>
						<div className={styles.info}>
							<Image src={Video} alt='/' width={20} height={20} />
							<text>16 уроков</text>
						</div>
						<div className={styles.info}>
							<Image src={File} alt='/' width={20} height={20} />
							<text>24 материала</text>
						</div>
					</div>
					<p>Minus repellendus officia recusandae.</p>
					<button className='active'>
						Подробнее
						<Image src={LinkIcon} width={24} height={24} alt='' />
					</button>
				</div>
			</div>
		</Scrollbars>
	)
}

export default MainCourses
