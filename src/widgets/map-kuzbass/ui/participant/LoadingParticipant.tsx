import { FC } from 'react'

import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from './Participant.module.scss'

const LoadingParticipant: FC = () => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<SkeletonLoader
					containerClassName={styles.img}
					className='h-full -top-4'
					baseColor='#CCCCCC'
					highlightColor='#B3B3B3'
				/>
				<h3 className={styles.title}>
					<SkeletonLoader baseColor='#CCCCCC' highlightColor='#B3B3B3' />
				</h3>
			</div>
			<address className={styles.address}>
				<SkeletonLoader baseColor='#CCCCCC' highlightColor='#B3B3B3' />
			</address>
		</div>
	)
}

export default LoadingParticipant
