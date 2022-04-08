import { useState } from 'react'
import { Product, ProductInCart } from '../interfaces'

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart
	}>()

	const onProductCountChange = ({
		product,
		count,
	}: {
		product: Product
		count: number
	}) => {
		setShoppingCart((prev) => {
			if (count === 0) {
				const list = { ...prev }
				delete list[product.id]

				return { ...list }
			}

			return {
				...prev,
				[product.id]: { ...product, count },
			}
		})
	}

	return { shoppingCart, onProductCountChange }
}
