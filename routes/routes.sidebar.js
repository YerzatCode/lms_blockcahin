import { Calendar, Chat, Courses, Home, Shield } from '@/public/assets/sidebar/'

export const routes = [
	{
		name: 'Мое обучение',
		href: '/',
		icon: <Home />,
	},
	{
		name: 'Курсы',
		href: '/courses',
		icon: <Courses />,
	},
	{
		name: 'Календарь',
		href: '/schedule',
		icon: <Calendar />,
	},
	{
		name: 'Сообщения',
		href: '/message',
		icon: <Chat />,
	},
	{
		name: 'Поддержка',
		href: '/support',
		icon: <Shield />,
	},
]
