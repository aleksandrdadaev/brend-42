'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteEvent } from '@/features/delete-event'

import { ManageButtons } from '@/entities/manage-buttons'

import { getManageUrl } from '@/shared/config/url.config'
import { useResize } from '@/shared/lib/hooks/useResize'
import { IEvent } from '@/shared/model/types/event.type'
import DeleteButton from '@/shared/ui/manage-buttons/DeleteButton'
import EditButton from '@/shared/ui/manage-buttons/EditButton'

import { isBlue, isGreen, isOrange } from '../lib/utils/change-color-card.util'

import styles from './EventCard.module.scss'
import { eventVariants } from './event-animation'

export const EventCard: FC<{
	event: IEvent
	position: number
	manage?: boolean
}> = ({ event, position, manage }) => {
	const { isDesktop } = useResize()
	const { isPending, mutate } = useDeleteEvent()
	const { push } = useRouter()
	return (
		<motion.article
			className={clsx(styles.card, {
				['bg-orange']: isOrange(isDesktop, position),
				['bg-blue']: isBlue(isDesktop, position),
				['bg-primary']: isGreen(isDesktop, position),
			})}
			variants={eventVariants}
			initial='hidden'
			animate='show'
			whileHover={'hover'}
		>
			<h3 className={styles.title}>{event.name}</h3>
			<p className={styles.description}>{event.description}</p>
			<span
				className={clsx(styles.date, {
					['bg-orange']: isOrange(isDesktop, position),
					['bg-blue']: isBlue(isDesktop, position),
					['bg-primary']: isGreen(isDesktop, position),
				})}
			>
				{event.date}
			</span>
			{manage && (
				<ManageButtons>
					<EditButton
						clickHandler={() => push(getManageUrl(`/event/edit/${event._id}`))}
						disabled={isPending}
					/>
					<DeleteButton
						clickHandler={() => mutate(event._id)}
						disabled={isPending}
					/>
				</ManageButtons>
			)}
		</motion.article>
	)
}
