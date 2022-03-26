import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../components'

import style from '../styles/styles.module.css'

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
					gridTemplateColumns: 'repeat(auto-fill, min-max(250px, 1fr))',
					gap: '24px',
				}}
			>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</section>
	)
}

export default ShoppingPage
