'use client'

import { useEffect, useState } from 'react'

import { useGetAllDistricts } from '@/features/get-all-districts'

export const useDistrictsSelect = () => {
	const { districts, isLoading, isSuccess } = useGetAllDistricts()
	const [districtsValues, setDistrictsValues] = useState<
		{ label: string; value: string }[]
	>([])

	useEffect(() => {
		if (isSuccess && districts)
			setDistrictsValues(
				districts?.map(district => ({
					label: district.name,
					value: district._id,
				}))
			)
	}, [isSuccess])

	const filterDistricts = (inputValue: string) => {
		return districtsValues.filter(district =>
			district.label.toLowerCase().includes(inputValue.toLowerCase())
		)
	}

	const promiseOptions = (inputValue: string) =>
		new Promise<{ label: string; value: string }[]>(resolve => {
			setTimeout(() => {
				resolve(filterDistricts(inputValue))
			}, 1000)
		})

	return {
		districts: districtsValues,
		promiseOptions,
	}
}
