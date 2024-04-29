'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC, useContext } from 'react'

import { useGetCondition } from '@/features/get-condition'

import icon from '@/shared/assets/icons/angled.svg'
import { skeletonInner } from '@/shared/assets/styles/skeleton-loader.style'
import { getImageUrl } from '@/shared/config/api.config'
import { ManageContext } from '@/shared/lib/utils/context.util'
import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from './Text.module.scss'

const Text: FC = () => {
	const { condition, isLoading, isSuccess } = useGetCondition()
	const manage = useContext(ManageContext)
	return (
		<div className={styles.wrapper}>
			<p className={styles.text}>
				{isSuccess && condition?.text}
				{isLoading && (
					<SkeletonLoader
						height={'fit-content'}
						className={skeletonInner}
						count={10}
					/>
				)}
			</p>
			{!manage && (
				<Link
					href={getImageUrl('/commission.pdf')}
					target='_blank'
					className={styles.link}
				>
					<Image src={icon} alt='' width={24} height={24} />
					Комиссия
				</Link>
			)}
		</div>
	)
}

export default Text
