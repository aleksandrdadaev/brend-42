import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../Video.module.scss'

import styles from './LoaderVideo.module.scss'

export const LoaderVideo: FC = () => {
	return (
		<div className={styles2.wrapper}>
			<SkeletonLoader
				containerClassName={styles2.video}
				height={'100%'}
				className={skeletonInner}
			/>
			<SkeletonLoader
				containerClassName={clsx(styles2.caption, styles.caption)}
				className={skeletonInner}
			/>
		</div>
	)
}
