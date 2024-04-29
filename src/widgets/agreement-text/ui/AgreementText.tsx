'use client'

import { FC } from 'react'

import { useGetAgreementText } from '@/features/get-agreement-text'

import { PageText } from '@/entities/page-text'

import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from './AgreementText.module.scss'

export const AgreementText: FC = () => {
	const { agreement, isLoading } = useGetAgreementText()
	return (
		<section className={styles.section}>
			<PageText>
				{isLoading ? <SkeletonLoader count={20} /> : agreement?.text}
			</PageText>
		</section>
	)
}
