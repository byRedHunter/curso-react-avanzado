import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../components'

import { products } from '../data/products'

import style from '../styles/styles.module.css'
import '../styles/custom-style.css'

const product = products[0]

const ShoppingPage = () => {
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
					<ProductCard
						product={product}
						className='bg-dark text-white'
						initialValues={{ count: 7, maxCount: 10 }}
					>
						{({ reset, increaseBy, isMaxCountReached, count }) => (
							<>
								<ProductImage className='custom-image' />
								<ProductTitle className='text-white' />
								<ProductButtons className='custom-buttons' />
								<button onClick={reset}>Reset</button>
								<button onClick={() => increaseBy(-2)}>-2</button>
								{!isMaxCountReached && (
									<button onClick={() => increaseBy(2)}>+2</button>
								)}
								<span>{count}</span>
							</>
						)}
					</ProductCard>
				</div>
			</section>
		</>
	)
}

export default ShoppingPage
