import { useProduct } from '../hooks/useProduct'

import noImage from '../assets/no-image.jpg'
import style from '../styles/styles.module.css'

interface Props {
	product: Product
}

interface Product {
	id: string
	title: string
	img?: string
}

const ProductCard = ({ product }: Props) => {
	const { counter, increaseBy } = useProduct()

	return (
		<article className={style.productCard}>
			<img
				src={product.img ? product.img : noImage}
				alt={product.title}
				className={style.productImg}
			/>

			<span className={style.productDescription}> {product.title} </span>

			<div className={style.buttonsContainer}>
				<button className={style.buttonMinus} onClick={() => increaseBy(-1)}>
					-
				</button>
				<div className={style.countLabel}> {counter} </div>
				<button className={style.buttonAdd} onClick={() => increaseBy(1)}>
					+
				</button>
			</div>
		</article>
	)
}

export default ProductCard
