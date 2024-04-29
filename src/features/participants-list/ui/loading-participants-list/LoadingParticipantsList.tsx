import { FC } from 'react'

import { CardLoader } from '@/entities/member-card/ui/CardLoader'

import styles from '../participants-list/ParticipantsList.module.scss'

export const LoadingParticipantsList: FC<{ pageSize: number }> = ({
	pageSize,
}) => {
	const participants = new Array(pageSize).fill('')
	return (
		<div className={styles.list}>
			{participants.map((el, index) => (
				<CardLoader key={index} />
			))}
		</div>
	)
}
