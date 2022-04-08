import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../components'

import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'

import style from '../styles/styles.module.css'
import '../styles/custom-style.css'

const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart()

	return (
		<>
			<section className={style.wrapper}>
				<h1>ShoppingStore</h1>
				<hr />

				<div
					style={{
						width: '100%',
						display: 'grid',
						gap: '24px',
					}}
				>
					{products.map((product) => (
						<ProductCard
							product={product}
							className='bg-dark text-white'
							key={product.id}
							onChange={onProductCountChange}
							value={shoppingCart?.[product.id]?.count || 0}
						>
							<ProductImage className='custom-image' />
							<ProductTitle className='text-white' />
							<ProductButtons className='custom-buttons' />
						</ProductCard>
					))}
				</div>
			</section>

			{shoppingCart && Object.values(shoppingCart).length && (
				<div
					className='shopping-cart'
					style={{
						display: 'flex',
						flexDirection: 'column',
						rowGap: '8px',
						padding: '16px 0',
					}}
				>
					{Object.values(shoppingCart).map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							className='bg-dark text-white'
							style={{ width: '80%', margin: '0 auto' }}
							value={product.count}
							onChange={onProductCountChange}
						>
							<ProductImage style={{ minHeight: 'initial' }} />
							<ProductButtons className='custom-buttons' />
						</ProductCard>
					))}
				</div>
			)}
		</>
	)
}

export default ShoppingPage
