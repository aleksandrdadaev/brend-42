import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from './LoaderHowParticipate.module.scss'

export const LoaderHowParticipate: FC = () => {
	return (
		<div className={styles.wrapper}>
			<SkeletonLoader height={'100%'} className={skeletonInner} />
		</div>
	)
}
