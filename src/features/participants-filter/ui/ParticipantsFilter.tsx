'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Dispatch, FC, SetStateAction } from 'react'

import { useGetAllDistricts } from '@/features/get-all-districts'
import { useOpenModalCard } from '@/features/open-modal-card'

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside'
import Button from '@/shared/ui/button/Button'
import Checkbox from '@/shared/ui/input/checkbox/Checkbox'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

import styles from './ParticipantsFilter.module.scss'
import { listVariants } from './animation/list-animation'

export const ParticipantsFilter: FC<{
	state: string[]
	setState: Dispatch<SetStateAction<string[]>>
}> = ({ setState, state }) => {
	const { close, modal, setModal } = useOpenModalCard<boolean>()
	const ref: any = useClickOutside({
		callback: () => close(),
		contains: true,
	})

	const { districts, isLoading, isSuccess } = useGetAllDistricts()

	return (
		<div className={styles.wrapper}>
			<Button
				clickHandler={() => setModal(prev => !prev)}
				className={clsx(styles.button, {
					[styles.open]: modal,
				})}
			>
				{isLoading ? <MiniLoader /> : 'Фильтр'}
			</Button>

			<AnimatePresence>
				{modal && (
					<motion.div
						ref={ref}
						className={styles.list}
						variants={listVariants}
						initial='hidden'
						animate='show'
						exit='hidden'
					>
						{isSuccess &&
							districts?.map(district => (
								<Checkbox
									label={district.name}
									checked={!!state.find(el => el === district._id)}
									onChange={() => {
										if (!!state.find(el => el === district._id))
											setState(prev => prev.filter(el => el !== district._id))
										else setState(prev => prev.concat([district._id]))
									}}
								/>
							))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
