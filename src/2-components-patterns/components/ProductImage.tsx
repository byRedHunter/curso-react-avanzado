import { useContext } from 'react'
import { ProductContext } from './ProductCard'

import noImage from '../assets/no-image.jpg'

import style from '../styles/styles.module.css'

export const ProductImage = ({ img = '' }) => {
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

	return <img src={imgToShow} alt={title} className={style.productImg} />
}
