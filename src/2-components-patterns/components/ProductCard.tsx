import { useProduct } from '../hooks/useProduct'

import Style from '../styles/styles.module.css'
import { createContext, CSSProperties, ReactElement } from 'react'
import { ProductContextProps } from '../interfaces'
import { Product } from '../interfaces/index'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
	product: Product
	children?: ReactElement | ReactElement[]
	className?: string
	style?: CSSProperties
}

const ProductCard = ({ product, children, className, style }: Props) => {
	const { counter, increaseBy } = useProduct()

	return (
		<Provider value={{ counter, increaseBy, product }}>
			<article className={`${Style.productCard} ${className}`} style={style}>
				{children}
			</article>
		</Provider>
	)
}

export default ProductCard
