import { ReactElement } from 'react'

export interface Props {
	product: Product
	children?: ReactElement | ReactElement[]
}

export interface Product {
	id: string
	title: string
	img?: string
}

export interface ProductContextProps {
	counter: number
	increaseBy: (value: number) => void
	product: Product
}

export interface ProductCardComponents {
	({ children, product }: Props): JSX.Element
	Title: () => JSX.Element
	Image: ({ img }: { img?: string }) => JSX.Element
	Buttons: () => JSX.Element
}
