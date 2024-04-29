import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../ContestItem.module.scss'

import styles from './LoaderContestItem.module.scss'

export const LoaderContestItem: FC = () => {
	return (
		<div className={clsx(styles2.wrapper, styles.wrapper)}>
			<SkeletonLoader
				containerClassName={styles.container}
				height={'100%'}
				className={skeletonInner}
			/>
		</div>
	)
}
