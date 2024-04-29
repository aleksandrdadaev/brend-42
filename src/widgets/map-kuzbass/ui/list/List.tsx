import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { scroller } from 'react-scroll'
import { useLockedBody } from 'usehooks-ts'

import { useOpenModalCard } from '@/features/open-modal-card'

import { ModalCard } from '@/entities/modal-card'

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside'
import { IParticipant } from '@/shared/model/types/participant.type'

import Participant from '../participant/Participant'
import LoaderParticipant from '../participant/loader/LoaderParticipant'

import styles from './List.module.scss'

const List: FC<{
	list: IParticipant[]
	count: number
	isLoading: boolean
	isSuccess: boolean
}> = ({ count, list, isLoading, isSuccess }) => {
	const { close, modal, setModal } = useOpenModalCard<IParticipant>()
	const [locked, setLocked] = useLockedBody(false)
	const ref = useClickOutside({
		callback: () => {
			close(), setLocked(false)
		},
		contains: true,
	})
	const loadings = new Array(5).fill('')
	return (
		<div className={styles.wrapper}>
			<span className={styles.title}>Участники:</span>
			{isSuccess && list.length === 0 && (
				<span className={styles.notFound}>Участников не найдено</span>
			)}
			<div className={styles.listWrapper}>
				<Scrollbars
					className={styles.list}
					universal
					renderTrackVertical={props => (
						<div
							className={clsx(styles.track, {
								[styles.trackHidden]: isLoading || !list.length,
							})}
						/>
					)}
					renderThumbVertical={props => <div className={styles.thumb} />}
				>
					{isLoading &&
						loadings.map((el, index) => <LoaderParticipant key={index} />)}
					{isSuccess &&
						list.length > 0 &&
						list?.map(participant => (
							<Participant
								participant={participant}
								key={participant._id}
								clickHandler={() => {
									setModal(participant)
									setLocked(true)
								}}
							/>
						))}
				</Scrollbars>
			</div>

			<Link
				href='/participants'
				scroll={false}
				className={styles.link}
				onClick={() =>
					setTimeout(() => {
						scroller.scrollTo('participants', {
							smooth: true,
							isDynamic: true,
						})
					}, 250)
				}
			>
				Все участники
			</Link>
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

export default List
