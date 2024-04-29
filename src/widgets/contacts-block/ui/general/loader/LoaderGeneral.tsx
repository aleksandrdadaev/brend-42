import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../General.module.scss'

import styles from './LoaderGeneral.module.scss'

const LoaderGeneral: FC = () => {
	return (
		<div className={clsx(styles2.wrapper, styles.wrapper)}>
			<SkeletonLoader className={skeletonInner} height={'100%'} />
			<SkeletonLoader className={'-top-4 !rounded-circle'} height={'100%'} />
		</div>
	)
}

export default LoaderGeneral
