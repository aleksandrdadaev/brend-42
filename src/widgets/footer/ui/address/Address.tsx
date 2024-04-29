'use client'

import { FC } from 'react'

import { useGetContacts } from '@/features/get-contacts'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from './Address.module.scss'

const Address: FC = () => {
	const { contacts, isError, isLoading, isSuccess } = useGetContacts()
	const loadings = new Array(2).fill('')
	return (
		<div className={styles.wrapper}>
			{isLoading &&
				loadings.map((el, index) => (
					<SkeletonLoader
						containerClassName={styles.container}
						height={'100%'}
						className={skeletonInner}
						baseColor='#ffffff33'
						key={index}
					/>
				))}
			{isSuccess &&
				contacts?.address.map(address => (
					<span className={styles.address} key={address}>
						{address}
					</span>
				))}
		</div>
	)
}

export default Address
