'use client'

import { FC } from 'react'

import { useGetContest } from '@/features/get-contest'

import { ContestItem, LoaderContestItem } from '@/entities/contest-item'

import calendarIcon from '@/shared/assets/icons/contest/calendar.svg'
import expertIcon from '@/shared/assets/icons/contest/expert.svg'
import marksIcon from '@/shared/assets/icons/contest/marks.svg'
import participantsIcon from '@/shared/assets/icons/contest/participants.svg'
import { endOfQuantity } from '@/shared/lib/utils/end-of-quantity.util'

import styles from './Info.module.scss'

const Info: FC = () => {
	const {
		isLoading,
		isSuccess,
		experts = 0,
		participants = 0,
		trademarks = 0,
		year = 0,
	} = useGetContest()

	const contests = new Array(4).fill('')
	return (
		<div className={styles.wrapper}>
			{isLoading &&
				contests.map((el, index) => <LoaderContestItem key={index} />)}
			{isSuccess && (
				<>
					<ContestItem
						icon={calendarIcon}
						value={year}
						text='года'
						postscript='с'
						isDefault
					/>
					<ContestItem
						icon={participantsIcon}
						value={participants}
						text={endOfQuantity('участник', participants, '', 'а', 'ов')}
						isBlue
					/>
					<ContestItem
						icon={marksIcon}
						value={trademarks}
						text={`${endOfQuantity(
							'торгов',
							trademarks,
							'ая',
							'ые',
							'ых'
						)} ${endOfQuantity('мар', trademarks, 'ка', 'ки', 'ок')}`}
						isOrange
					/>
					<ContestItem
						icon={expertIcon}
						value={experts}
						text={endOfQuantity('эксперт', experts, '', 'а', 'ов')}
						isGreen
					/>
				</>
			)}
		</div>
	)
}

export default Info
