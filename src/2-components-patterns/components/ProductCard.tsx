import { useProduct } from '../hooks/useProduct'

import style from '../styles/styles.module.css'
import { createContext } from 'react'
import { ProductContextProps } from '../interfaces'
import { Props } from '../interfaces/index'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

const ProductCard = ({ product, children }: Props) => {
	const { counter, increaseBy } = useProduct()

	return (
		<Provider value={{ counter, increaseBy, product }}>
			<article className={style.productCard}>{children}</article>
		</Provider>
	)
}

export default ProductCard
