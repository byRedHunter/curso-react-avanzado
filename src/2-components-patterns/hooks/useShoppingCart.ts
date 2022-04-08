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
			const productInCart: ProductInCart = (prev && prev[product.id]) || {
				...product,
				count: 0,
			}

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count

				return {
					...prev,
					[product.id]: productInCart,
				}
			}

			// borrar el producto del carrito
			const list = { ...prev }
			delete list[product.id]

			return { ...list }

			/* if (count === 0) {
				const list = { ...prev }
				delete list[product.id]

				return { ...list }
			}

			return {
				...prev,
				[product.id]: { ...product, count },
			} */
		})
	}

	return { shoppingCart, onProductCountChange }
}
