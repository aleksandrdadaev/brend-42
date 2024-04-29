'use client'

import { FC } from 'react'

import { useGetAllOrganizers } from '@/features/get-all-organizers'

import { LoaderOrganizer, Organizer } from '@/entities/organizer'

import styles from './Organizers.module.scss'

const Organizers: FC = () => {
	const { isLoading, isSuccess, organizers, totalOrganizers } =
		useGetAllOrganizers()
	const loaders = new Array(2).fill('')
	return (
		<div>
			<h3 className={styles.title}>Организаторы конкурса:</h3>
			<div className={styles.list}>
				{isLoading &&
					loaders.map((el, index) => <LoaderOrganizer key={index} />)}
				{isSuccess &&
					organizers?.map(organizer => (
						<Organizer organizer={organizer} key={organizer._id} />
					))}
			</div>
		</div>
	)
}

export default Organizers
