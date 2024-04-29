import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from '../EventCard.module.scss'

export const LoadingEventCard: FC = () => {
	return (
		<div className={clsx(styles.card, '!p-0')}>
			<SkeletonLoader
				containerClassName={'h-200'}
				height={'100%'}
				className={skeletonInner}
			/>
		</div>
	)
}
