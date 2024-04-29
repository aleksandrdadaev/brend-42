'use client'

import { FC } from 'react'

import { useGetAllOrganizers } from '@/features/get-all-organizers'

import {
	FooterOrganizer,
	LoaderFooterOrganizer,
} from '@/entities/footer-organizer'

import logo from '@/shared/assets/icons/logo-alt.svg'
import { getImageUrl } from '@/shared/config/api.config'

import styles from './Organizers.module.scss'

const Organizers: FC = () => {
	const { isLoading, isSuccess, organizers } = useGetAllOrganizers()
	const loadings = new Array(3).fill('')
	return (
		<div className={styles.list}>
			{isLoading &&
				loadings.map((el, index) => <LoaderFooterOrganizer key={index} />)}
			{isSuccess && (
				<>
					<FooterOrganizer logoPath={logo} name='Бренд Кузбасса' />
					{organizers?.map(organizer => (
						<FooterOrganizer
							logoPath={getImageUrl(organizer.logoPath)}
							name={organizer.name}
							key={organizer._id}
						/>
					))}
				</>
			)}
		</div>
	)
}

export default Organizers
