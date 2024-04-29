'use client'

import { FC } from 'react'

import { useGetPolicyText } from '@/features/get-policy-text'

import { PageText } from '@/entities/page-text'

import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from './PolicyText.module.scss'

export const PolicyText: FC = () => {
	const { policy, isLoading } = useGetPolicyText()

	return (
		<section className={styles.section}>
			<PageText>
				{isLoading ? <SkeletonLoader count={20} /> : policy?.text}
			</PageText>
		</section>
	)
}
