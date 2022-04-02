import { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'

import Style from '../styles/styles.module.css'

export interface Props {
	className?: string
	style?: CSSProperties
}

export const ProductTitle = ({ className, style }: Props) => {
	const { product } = useContext(ProductContext)
	const { title } = product

	return (
		<span className={`${Style.productDescription} ${className}`} style={style}>
			{' '}
			{title}{' '}
		</span>
	)
}
