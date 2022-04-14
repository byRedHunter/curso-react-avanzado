import { useProduct } from '../hooks/useProduct'

import Style from '../styles/styles.module.css'
import { createContext, CSSProperties } from 'react'
import { ProductContextProps } from '../interfaces'
import {
	Product,
	OnChangeArgs,
	InitialValues,
	ProductCardHandlers,
} from '../interfaces/index'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
	product: Product
	// children?: ReactElement | ReactElement[]
	children: (args: ProductCardHandlers) => JSX.Element
	className?: string
	style?: CSSProperties
	onChange?: (args: OnChangeArgs) => void
	value?: number
	initialValues?: InitialValues
}

const ProductCard = ({
	product,
	children,
	className,
	style,
	onChange,
	value,
	initialValues,
}: Props) => {
	const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
		useProduct({
			product,
			onChange,
			value,
			initialValues,
		})

	return (
		<Provider value={{ counter, increaseBy, product, maxCount }}>
			<article className={`${Style.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,
					increaseBy,
					reset,
				})}
			</article>
		</Provider>
	)
}

export default ProductCard
