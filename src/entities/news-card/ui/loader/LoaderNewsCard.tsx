'use client'

import clsx from 'clsx'
import { FC } from 'react'

import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import { useResize } from '@/shared/lib/hooks/useResize'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles2 from '../NewsCard.module.scss'

import styles from './LoaderNewsCard.module.scss'

export const LoaderNewsCard: FC = () => {
	const { isTablet } = useResize()
	return (
		<div className={clsx(styles2.card, styles2.text, styles.wrapper)}>
			<SkeletonLoader
				containerClassName={clsx(styles2.date, styles.date)}
				height={'100%'}
				className={skeletonInner}
			/>
			<SkeletonLoader
				containerClassName={clsx(styles2.title, styles.title)}
				height={'100%'}
				count={isTablet ? 1 : 2}
				className='!rounded-10'
			/>
		</div>
	)
}
