import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../ContactMap.module.scss'

import styles from './LoaderContactMap.module.scss'

export const LoaderContactMap: FC = () => {
	return (
		<div className={clsx(styles2.wrapper, styles.wrapper)}>
			<div className={styles2.contacts}>
				<SkeletonLoader
					containerClassName={styles.address}
					className={skeletonInner}
				/>
				<SkeletonLoader
					containerClassName={styles.tel}
					className={skeletonInner}
				/>
			</div>
			<SkeletonLoader
				containerClassName={styles2.map}
				height={'100%'}
				className={skeletonInner}
			/>
		</div>
	)
}
