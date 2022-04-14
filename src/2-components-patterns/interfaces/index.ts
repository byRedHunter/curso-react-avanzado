import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as PropsImage } from '../components/ProductImage'
import { Props as PropsTitle } from '../components/ProductTitle'
import { Props as PropsButtons } from '../components/ProductButtons'
export interface Product {
	id: string
	title: string
	img?: string
}

export interface ProductContextProps {
	counter: number
	maxCount?: number
	product: Product
	increaseBy: (value: number) => void
}

export interface ProductCardComponents {
	({ children, product }: ProductCardProps): JSX.Element
	Buttons: (Object: PropsButtons) => JSX.Element
	Image: (Object: PropsImage) => JSX.Element
	Title: (Object: PropsTitle) => JSX.Element
}

export interface OnChangeArgs {
	product: Product
	count: number
}

export interface ProductInCart extends Product {
	count: number
}

export interface InitialValues {
	count?: number
	maxCount?: number
}

export interface ProductCardHandlers {
	count: number
	isMaxCountReached: boolean
	maxCount?: number
	product: Product
	increaseBy: (value: number) => void
	reset: () => void
}
