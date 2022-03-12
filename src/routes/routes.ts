import { lazy, LazyExoticComponent } from 'react'
import NoLazy from '../1-lazyload/pages/NoLazy'

const LazyLayout = lazy(
	() =>
		import(
			/* webpackChunkName: "LazyLayout" */ '../1-lazyload/layout/LazyLayout'
		)
)

type JSXComponent = () => JSX.Element

interface Route {
	to: string
	path: string
	Component: JSXComponent | LazyExoticComponent<JSXComponent>
	name: string
}

export const routes: Route[] = [
	{
		to: '/dash/',
		path: '/dash/*', // se agrega /* para manejar el path
		Component: LazyLayout,
		name: 'Dashboard',
	},
	{
		to: '/no-lazy',
		path: '/no-lazy', // se agrega /* para manejar el path
		Component: NoLazy,
		name: 'NoLazy',
	},
]
