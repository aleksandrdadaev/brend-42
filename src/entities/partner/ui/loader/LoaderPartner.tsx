import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../Partner.module.scss'

import styles from './LoaderPartner.module.scss'

export const LoaderPartner: FC = () => {
	return (
		<div className={clsx(styles2.wrapper)}>
			<SkeletonLoader
				containerClassName={clsx(styles2.img, styles.img)}
				height={'100%'}
				className={skeletonInner}
			/>
			<p className={styles2.text}>
				<SkeletonLoader count={3} className={skeletonInner} />
			</p>
		</div>
	)
}
