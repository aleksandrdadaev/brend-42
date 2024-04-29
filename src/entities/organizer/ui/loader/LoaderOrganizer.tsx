import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../Organizer.module.scss'

import styles from './LoaderOrganizer.module.scss'

export const LoaderOrganizer: FC = () => {
	return (
		<div className={clsx(styles2.organizer, styles.wrapper)}>
			<SkeletonLoader
				containerClassName={styles.container}
				height={'100%'}
				className={skeletonInner}
			/>
		</div>
	)
}
