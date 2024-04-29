import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../Album.module.scss'

import styles from './LoaderAlbum.module.scss'

export const LoaderAlbum: FC = () => {
	return (
		<div className={styles2.wrapper}>
			<SkeletonLoader
				containerClassName={styles2.img}
				height={'100%'}
				className={skeletonInner}
			/>
			<SkeletonLoader
				containerClassName={clsx(styles2.title, styles.title)}
				className={skeletonInner}
			/>
		</div>
	)
}
