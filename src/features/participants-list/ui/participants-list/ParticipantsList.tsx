'use client'

import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { useLockedBody } from 'usehooks-ts'

import { useOpenModalCard } from '@/features/open-modal-card'

import { MemberCard } from '@/entities/member-card'
import { ModalCard } from '@/entities/modal-card'

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside'
import { IParticipant } from '@/shared/model/types/participant.type'

import styles from './ParticipantsList.module.scss'

export const ParticipantsList: FC<{
	participants: IParticipant[] | undefined
}> = ({ participants }) => {
	const { close, modal, setModal } = useOpenModalCard<IParticipant>()
	const [locked, setLocked] = useLockedBody(false)
	const ref = useClickOutside({
		callback: () => {
			close(), setLocked(false)
		},
		contains: true,
	})
	return (
		<div className={styles.list}>
			{participants?.map(participant => (
				<MemberCard
					member={participant}
					key={participant._id}
					clickHandler={() => {
						setModal(participant)
						setLocked(true)
					}}
				/>
			))}
			<AnimatePresence>
				{modal && (
					<ModalCard
						ref={ref}
						member={modal}
						close={() => {
							close()
							setLocked(false)
						}}
					/>
				)}
			</AnimatePresence>
		</div>
	)
}
