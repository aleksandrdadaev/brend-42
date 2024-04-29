import { FC } from 'react'

import { LoadingEventCard } from '@/entities/event-card'

import styles from '../events-list/EventsList.module.scss'

const LoadingEventsList: FC<{ pageSize: number }> = ({ pageSize }) => {
	const events = new Array(pageSize).fill('')
	return (
		<div className={styles.list}>
			{events.map((el, index) => (
				<LoadingEventCard key={index} />
			))}
		</div>
	)
}

export default LoadingEventsList
