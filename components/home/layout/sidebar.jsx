import { routes } from '@/routes/routes.sidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Sidebar() {
	const { pathname } = useRouter()

	return (
		<>
			<aside>
				<ul>
					{routes.map((item) => (
						<li
							key={item.name}
							className={
								pathname == item.href ? 'routes routes__active' : 'routes'
							}>
							<Link href={item.href}>
								{item.icon}
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</aside>
		</>
	)
}

export default Sidebar
