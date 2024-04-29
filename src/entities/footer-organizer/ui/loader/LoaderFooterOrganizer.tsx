import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from './LoaderFooterOrganizer.module.scss'

export const LoaderFooterOrganizer: FC = () => {
	return (
		<div className={styles.wrapper}>
			<SkeletonLoader
				containerClassName={styles.container}
				height={'100%'}
				className={skeletonInner}
				baseColor='#ffffff33'
			/>
		</div>
	)
}
