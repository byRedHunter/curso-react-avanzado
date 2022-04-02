import { useContext, CSSProperties } from 'react'
import { ProductContext } from './ProductCard'

import Style from '../styles/styles.module.css'

export interface Props {
	className?: string
	style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
	const { counter, increaseBy } = useContext(ProductContext)

	return (
		<div className={`${Style.buttonsContainer} ${className}`} style={style}>
			<button className={Style.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={Style.countLabel}> {counter} </div>
			<button className={Style.buttonAdd} onClick={() => increaseBy(1)}>
				+
			</button>
		</div>
	)
}
