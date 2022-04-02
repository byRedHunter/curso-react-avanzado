import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../components'

import style from '../styles/styles.module.css'
import '../styles/custom-style.css'

const product = {
	id: 'd5s7',
	title: 'Coffee Mug - Card',
	img: '/coffee-mug.png',
}

const ShoppingPage = () => {
	return (
		<section className={style.wrapper}>
			<h1>ShoppingStore</h1>
			<hr />

			<div
				style={{
					width: '100%',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, min-max(250px, 1fr))',
					gap: '24px',
				}}
			>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>

				<ProductCard product={product} style={{ backgroundColor: '#3d3' }}>
					<ProductCard.Image />
					<ProductCard.Title style={{ color: '#430443' }} />
					<ProductCard.Buttons
						style={{ boxShadow: '0 0 5px 0px #000', background: 'transparent' }}
					/>
				</ProductCard>

				<ProductCard product={product} className='bg-dark text-white'>
					<ProductImage className='custom-image' />
					<ProductTitle className='text-white' />
					<ProductButtons className='custom-buttons' />
				</ProductCard>

				<ProductCard product={product} className='bg-dark text-white'>
					<ProductCard.Image />
					<ProductCard.Title className='text-white' />
					<ProductCard.Buttons className='custom-buttons' />
				</ProductCard>
			</div>
		</section>
	)
}

export default ShoppingPage
