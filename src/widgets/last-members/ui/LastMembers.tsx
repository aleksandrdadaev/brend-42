'use client'

import { FC, useState } from 'react'

import { useGetAllParticipants } from '@/features/get-all-participants'
import { usePagination } from '@/features/pagination'
import {
	LoadingParticipantsList,
	ParticipantsList,
} from '@/features/participants-list'
import { ShowMoreButton } from '@/features/show-more-button'

import { changePageSize } from '@/shared/lib/utils/change-page-size.util'
import { IParticipant } from '@/shared/model/types/participant.type'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './LastMembers.module.scss'

export const LastMembers: FC = () => {
	const [pageSize, setPageSize] = useState<number>(3)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const { isLoading, isSuccess, participants, totalParticipants } =
		useGetAllParticipants(pageSize, pageNumber, true)

	const { list, showMore } = usePagination<IParticipant>({
		isSuccess,
		pageNumber,
		pageSize,
		elements: participants,
		totalElements: totalParticipants,
	})

	changePageSize({
		setPageNumber,
		setPageSize,
		desktop: 3,
		laptop: 4,
		tablet: 4,
		mobile: 2,
	})
	return (
		<section className={styles.wrapper}>
			<SubTitle classname='text-blue'>Участники конкурса</SubTitle>
			<div className={styles.right}>
				{isLoading && !list.length && (
					<LoadingParticipantsList pageSize={pageSize} />
				)}
				{list.length > 0 && <ParticipantsList participants={list} />}

				{showMore && (
					<ShowMoreButton
						clickHandler={() => setPageNumber(prev => prev + 1)}
						isLoading={isLoading}
						text='Открыть еще'
					/>
				)}
			</div>
		</section>
	)
}
