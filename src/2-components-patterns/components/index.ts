import ProductCardHOC from './ProductCard'
import { ProductTitle } from './ProductTitle'
import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'
import { ProductCardComponents } from '../interfaces/index'

const ProductCard: ProductCardComponents = Object.assign(ProductCardHOC, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons,
})

export { ProductCard, ProductTitle, ProductImage, ProductButtons }
