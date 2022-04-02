import { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'

import noImage from '../assets/no-image.jpg'

import Style from '../styles/styles.module.css'

export interface Props {
	img?: string
	className?: string
	style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {
	const { product } = useContext(ProductContext)
	const { img: imgProduct, title } = product

	let imgToShow

	if (img) {
		imgToShow = img
	} else if (imgProduct) {
		imgToShow = imgProduct
	} else {
		imgToShow = noImage
	}

	return (
		<img
			src={imgToShow}
			alt={title}
			className={`${Style.productImg} ${className}`}
			style={style}
		/>
	)
}
