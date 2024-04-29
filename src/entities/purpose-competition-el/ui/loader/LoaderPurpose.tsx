import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../PurposeCompetitionEl.module.scss'

import styles from './LoaderPurpose.module.scss'

export const LoaderPurpose: FC = () => {
	return (
		<div className={clsx(styles2.purpose, styles.wrapper)}>
			<SkeletonLoader
				containerClassName={styles.container}
				height={'100%'}
				className={skeletonInner}
			/>
		</div>
	)
}
