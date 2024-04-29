import clsx from 'clsx'
import { FC } from 'react'

import CardTitle from '@/shared/ui/card-title/CardTitle'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from './MemberCard.module.scss'

export const CardLoader: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.img}>
				<SkeletonLoader
					height={'100%'}
					baseColor='#CCCCCC'
					highlightColor='#B3B3B3'
					className='relative -top-3 !rounded-10'
				/>
			</div>
			<div className={styles.brand}>
				<CardTitle>
					<SkeletonLoader
						baseColor='#CCCCCC'
						highlightColor='#B3B3B3'
						className='!rounded-7'
					/>
				</CardTitle>
			</div>
			<SkeletonLoader
				baseColor='#B3B3B3'
				highlightColor='#999999'
				height={'100%'}
				containerClassName={clsx(styles.company, '!p-0  h-40 tablet:h-37')}
				className='!rounded-7 relative -top-3'
			/>
		</div>
	)
}
