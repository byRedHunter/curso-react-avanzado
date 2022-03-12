import {
	BrowserRouter,
	Navigate,
	NavLink,
	Route,
	Routes,
} from 'react-router-dom'

import { routes } from './routes'
import logo from '../logo.svg'
import { Suspense } from 'react'

const Navigation = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<BrowserRouter>
				<div className='main-layout'>
					<nav>
						<img src={logo} alt='React Logo' />

						<ul>
							{routes.map((route) => (
								<li key={route.to}>
									<NavLink
										to={route.to}
										className={({ isActive }) => (isActive ? 'nav-active' : '')}
									>
										{route.name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<Routes>
						{routes.map(({ path, Component }) => (
							<Route key={path} path={path} element={<Component />} />
						))}

						<Route
							path='/*'
							element={<Navigate to={routes[0].path} replace />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	)
}

export default Navigation
