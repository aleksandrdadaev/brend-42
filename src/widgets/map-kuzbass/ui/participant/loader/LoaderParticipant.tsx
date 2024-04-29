import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../Participant.module.scss'

const LoaderParticipant: FC = () => {
	return (
		<div className={styles2.card}>
			<div className={styles2.header}>
				<SkeletonLoader
					containerClassName={styles2.img}
					height={'100%'}
					className={skeletonInner}
					baseColor='#CCCCCC'
					highlightColor='#B3B3B3'
				/>
				<h3 className={styles2.title}>
					<SkeletonLoader
						baseColor='#CCCCCC'
						highlightColor='#B3B3B3'
						className='!rounded-10'
					/>
				</h3>
			</div>
			<span className={styles2.company}>
				<SkeletonLoader
					baseColor='#CCCCCC'
					highlightColor='#B3B3B3'
					className='!rounded-10'
				/>
			</span>
		</div>
	)
}

export default LoaderParticipant
