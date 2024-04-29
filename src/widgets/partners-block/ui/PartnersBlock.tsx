'use client'

import { FC } from 'react'

import { useGetAllPartners } from '@/features/get-all-partners'

import { LoaderPartner, Partner } from '@/entities/partner'

import styles from './PartnersBlock.module.scss'

export const PartnersBlock: FC = () => {
	const { isLoading, isSuccess, partners, totalPartners } = useGetAllPartners()

	let loadings = new Array(8).fill('')
	return (
		<section className={styles.wrapper}>
			<div className={styles.list}>
				{isLoading &&
					loadings.map((el, index) => <LoaderPartner key={index} />)}
				{isSuccess &&
					partners?.map(partner => (
						<Partner partner={partner} key={partner._id} />
					))}
			</div>
		</section>
	)
}
