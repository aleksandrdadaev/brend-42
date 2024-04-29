import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../Nomination.module.scss'

import styles from './LoaderNomination.module.scss'

export const LoaderNomination: FC = () => {
	return (
		<div className={clsx(styles2.nomination, styles.wrapper)}>
			<SkeletonLoader
				containerClassName={styles.container}
				height={'100%'}
				className={skeletonInner}
			/>
		</div>
	)
}
