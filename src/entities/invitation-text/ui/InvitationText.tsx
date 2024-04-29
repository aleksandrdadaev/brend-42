import { FC } from 'react'

import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from './InvitationText.module.scss'

export const InvitationText: FC<{
	text: string | undefined
	isLoading: boolean
}> = ({ isLoading, text }) => {
	return (
		<p className={styles.text}>
			{isLoading ? <SkeletonLoader count={10} /> : text}
		</p>
	)
}
