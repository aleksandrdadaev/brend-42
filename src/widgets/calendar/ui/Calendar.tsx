'use client'

import { FC } from 'react'

import { useGetAllEvents } from '@/features/get-all-events'

import { IManage } from '@/shared/model/types/manage.type'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './Calendar.module.scss'
import EventsList from './events-list/EventsList'
import LoadingEventsList from './loading-events-list/LoadingEventsList'

export const Calendar: FC<IManage> = ({ manage = false }) => {
	const { events, isLoading } = useGetAllEvents()

	return (
		<section>
			<SubTitle classname={styles.title} animate={!manage}>
				Календарь
			</SubTitle>

			{isLoading ? (
				<LoadingEventsList pageSize={6} />
			) : (
				<EventsList events={events} manage={manage} />
			)}
		</section>
	)
}
