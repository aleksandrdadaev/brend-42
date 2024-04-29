'use client'

import { FC, useContext, useState } from 'react'
import { Element } from 'react-scroll'

import { useGetAllParticipants } from '@/features/get-all-participants'
import { useGetParticipantsBy } from '@/features/get-participants-by'
import { usePagination } from '@/features/pagination'
import { ParticipantsFilter } from '@/features/participants-filter'
import {
	LoadingParticipantsList,
	ParticipantsList,
} from '@/features/participants-list'
import {
	SearchParticipants,
	useSearchParticipants,
} from '@/features/search-participants'
import { ShowMoreButton } from '@/features/show-more-button'

import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { changePageSize } from '@/shared/lib/utils/change-page-size.util'
import { ManageContext } from '@/shared/lib/utils/context.util'
import { IParticipant } from '@/shared/model/types/participant.type'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './ParticipantsWithSearch.module.scss'

export const ParticipantsWithSearch: FC = () => {
	const manage = useContext(ManageContext)
	const [name, setName] = useState<string>('')
	const debouncedValue = useDebounce<string>(name, 1000)
	const [districts, setDistricts] = useState<string[]>([])
	const [pageSize, setPageSize] = useState<number>(3)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const { isLoading, isSuccess, participants, totalParticipants } =
		useGetAllParticipants(
			!manage ? pageSize : undefined,
			!manage ? pageNumber : undefined,
			false
		)

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

	const {
		isLoading: searchLoading,
		isSuccess: searchSuccess,
		participants: searchParticipants,
	} = useGetParticipantsBy(undefined, debouncedValue, districts)
	const { handleChange } = useSearchParticipants({
		setValue: setName,
	})

	return (
		<section className={styles.wrapper}>
			<SubTitle>Участники</SubTitle>
			<Element name='participants' className={styles.contentWrapper}>
				<div className={styles.content}>
					<div className={styles.management}>
						<SearchParticipants
							handleChange={handleChange}
							isLoading={searchLoading}
						/>
						<ParticipantsFilter state={districts} setState={setDistricts} />
					</div>

					{((isLoading && !list.length) || searchLoading) && (
						<LoadingParticipantsList pageSize={pageSize} />
					)}
					{!manage &&
						!debouncedValue &&
						!districts.length &&
						list.length > 0 && <ParticipantsList participants={list} />}

					{manage && !debouncedValue && !districts.length && isSuccess && (
						<ParticipantsList participants={participants} />
					)}

					{!manage && !debouncedValue && !districts.length && showMore && (
						<ShowMoreButton
							clickHandler={() => setPageNumber(prev => prev + 1)}
							isLoading={isLoading}
							text='Открыть еще'
						/>
					)}

					{searchSuccess &&
						searchParticipants &&
						searchParticipants?.length > 0 && (
							<ParticipantsList participants={searchParticipants} />
						)}

					{searchSuccess && !searchParticipants?.length && (
						<span className={styles.notFound}>
							По результатам поиска ничего не найдено.
						</span>
					)}
				</div>
			</Element>
		</section>
	)
}
