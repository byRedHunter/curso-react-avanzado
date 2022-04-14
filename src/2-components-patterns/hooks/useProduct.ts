import { useEffect, useRef, useState } from 'react'
import { Product, OnChangeArgs, InitialValues } from '../interfaces/index'

interface useProductArgs {
	product: Product
	onChange?: (args: OnChangeArgs) => void
	value?: number
	initialValues?: InitialValues
}

export const useProduct = ({
	product,
	onChange,
	value = 0,
	initialValues,
}: useProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value)
	const isMounted = useRef(false)

	const increaseBy = (value: number) => {
		let newValue = Math.max(counter + value, 0)

		if (initialValues?.maxCount)
			newValue = Math.min(initialValues.maxCount, newValue)

		setCounter(newValue)

		onChange &&
			onChange({
				product,
				count: newValue,
			})
	}

	const reset = () => {
		setCounter(initialValues?.count || 0)
	}

	useEffect(() => {
		if (!isMounted.current) return

		setCounter(value)
	}, [value])

	useEffect(() => {
		isMounted.current = true
	}, [])

	return {
		counter,
		isMaxCountReached:
			!!initialValues?.count && initialValues.maxCount === counter,
		maxCount: initialValues?.maxCount,
		increaseBy,
		reset,
	}
}
