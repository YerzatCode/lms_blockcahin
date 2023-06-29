import Logo from '@/public/assets/logo'
import { Ava, Network, Notification, Search } from '@/public/assets/navbar'
import { Chat } from '@/public/assets/sidebar'
import { button } from '@/routes/button.navbar'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Header() {
	const { push } = useRouter()
	const [open, setOpen] = useState(false)
	const openClick = () => {
		setOpen(!open)
	}

	return (
		<>
			<header>
				<div>
					<Logo style='logo' />
					<form>
						<Search />
						<input placeholder='Найти' type='text' />
					</form>
				</div>
				<div>
					<div className='_button'>
						{button.map((item) => (
							<button
								key={item.name}
								className='button'
								onClick={() => push(item.href)}>
								{item.name}
								{item.icon}
							</button>
						))}
					</div>
					<div className='icon_button'>
						<div className='notification'>
							<div onClick={openClick}>
								<Notification />
							</div>
							<ul className={open ? 'drop_down_active' : 'drop_down'}>
								<li>
									<p>Новое сообщение</p>
									<div>
										Задизайнить LMS, дедлайн..
										<Chat />
									</div>
								</li>
								<li>
									<p>Новое сообщение</p>
									<div>
										Задизайнить LMS, дедлайн..
										<Chat />
									</div>
								</li>
								<li>
									<p>Новое сообщение</p>
									<div>
										Задизайнить LMS, дедлайн..
										<Chat />
									</div>
								</li>
							</ul>
						</div>
						<Network />
					</div>
					<Image
						src={Ava}
						alt=''
						onClick={() => push('/profile')}
						width={50}
						height={50}
						priority
					/>
				</div>
			</header>
		</>
	)
}

export default Header
