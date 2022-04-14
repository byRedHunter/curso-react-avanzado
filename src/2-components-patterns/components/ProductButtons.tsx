import { useContext, CSSProperties, useCallback } from 'react'
import { ProductContext } from './ProductCard'

import Style from '../styles/styles.module.css'

export interface Props {
	className?: string
	style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
	const { counter, increaseBy, maxCount } = useContext(ProductContext)

	const isMaxReached = useCallback(
		() => !!maxCount && counter === maxCount,
		[counter, maxCount]
	)

	return (
		<div className={`${Style.buttonsContainer} ${className}`} style={style}>
			<button className={Style.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={Style.countLabel}> {counter} </div>
			<button
				className={`${Style.buttonAdd} ${isMaxReached() && Style.disabled}`}
				onClick={() => increaseBy(1)}
				disabled={isMaxReached()}
			>
				+
			</button>
		</div>
	)
}
