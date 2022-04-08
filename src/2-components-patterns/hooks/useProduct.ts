import { useEffect, useRef, useState } from 'react'
import { Product, OnChangeArgs } from '../interfaces/index'

interface useProductArgs {
	product: Product
	onChange?: (args: OnChangeArgs) => void
	value?: number
}

export const useProduct = ({
	product,
	onChange,
	value = 0,
}: useProductArgs) => {
	const [counter, setCounter] = useState(value)

	const increaseBy = (value: number) => {
		const newValue = Math.max(counter + value, 0)
		setCounter(newValue)

		onChange && onChange({ product, count: newValue })
	}

	useEffect(() => {
		setCounter(value)
	}, [value])

	return { counter, increaseBy }
}
