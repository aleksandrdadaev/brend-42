import { FC } from 'react'

import { EventCard } from '@/entities/event-card'

import { IEvent } from '@/shared/model/types/event.type'

import styles from './EventsList.module.scss'

const EventsList: FC<{ events: IEvent[] | undefined; manage?: boolean }> = ({
	events,
	manage,
}) => {
	let counter: number = 0
	return (
		<div className={styles.list}>
			{events?.map((event, index) => {
				if (index % 6 === 0) counter = 0
				counter += 1
				return (
					<EventCard
						event={event}
						key={event._id}
						position={counter}
						manage={manage}
					/>
				)
			})}
		</div>
	)
}

export default EventsList
