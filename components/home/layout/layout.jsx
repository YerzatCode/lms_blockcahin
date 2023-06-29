import Header from './header'
import Sidebar from './sidebar'

function Layout({ children }) {
	return (
		<div className='layout'>
			<Header />
			<Sidebar />
			<article>{children}</article>
		</div>
	)
}

export default Layout
