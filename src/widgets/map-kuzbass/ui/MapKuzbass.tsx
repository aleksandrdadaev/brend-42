'use client'

import { FC, useEffect, useState } from 'react'

import { useGetAllDistricts } from '@/features/get-all-districts'
import { useGetParticipantsByDistrict } from '@/features/get-participants-by-district'

import styles from './MapKuzbass.module.scss'
import List from './list/List'
import Map from './map/Map'

export const MapKuzbass: FC = () => {
	const {
		districts,
		isLoading: loadingDistricts,
		isSuccess: successDistricts,
	} = useGetAllDistricts()
	const [districtId, setDistrictId] = useState<string>('')
	const [district, setDistrict] = useState<string>('Кемеровский')
	const {
		isLoading,
		isSuccess,
		participants = [],
		totalParticipants = 0,
	} = useGetParticipantsByDistrict(districtId)

	useEffect(() => {
		if (successDistricts) {
			let result = districts?.find(item => item.name === 'Кемеровский')
			if (result) setDistrictId(result._id)
		}
	}, [successDistricts])
	return (
		<section className={styles.wrapper}>
			<Map
				props={{
					districtName: district,
					setDistrict,
					setDistrictId,
					districts,
					isLoading: loadingDistricts,
					isSuccess: successDistricts,
				}}
			/>

			<List
				count={totalParticipants}
				list={participants}
				isLoading={isLoading}
				isSuccess={isSuccess}
			/>
		</section>
	)
}
