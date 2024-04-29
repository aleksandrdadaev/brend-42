'use client'

import Link from 'next/link'
import Script from 'next/script'
import { FC } from 'react'

import { useGetVote } from '@/features/get-vote'

import SkeletonLoader from '@/shared/ui/skeleton-loader/SkeletonLoader'

import styles from './VotingBlock.module.scss'

export const VotingBlock: FC = () => {
	const { vote, isLoading, isSuccess } = useGetVote()

	return (
		<section>
			{isLoading && (
				<div className={styles.loading}>
					<SkeletonLoader containerClassName={styles.openVoting} />
				</div>
			)}
			{isSuccess && vote?.isEnabled && (
				<>
					<Link
						href='#'
						id={`tte-tr-${vote.votingId}`}
						className={styles.openVoting}
					></Link>
					<div id={`tte-i-${vote.votingId}`}></div>
					<Script
						src={vote.link}
						onLoad={() =>
							window.ttgrafSetEmbedParams({
								id: vote.votingId,
								scrollToInvalid: true,
							})
						}
					/>
				</>
			)}
			{isSuccess && !vote?.isEnabled && (
				<span className={'T2 tablet:T2-mobile'}>{vote?.text}</span>
			)}
		</section>
	)
}
