'use client'

import { FC, useContext } from 'react'

import { useGetAllHowParticipates } from '@/features/get-all-how-participates'
import { GoToInvitationForm } from '@/features/go-to-invitation-form'

import {
	HowParticipate,
	LoaderHowParticipate,
} from '@/entities/how-participate'

import { ManageContext } from '@/shared/lib/utils/context.util'

import styles from './List.module.scss'

const List: FC = () => {
	const manage = useContext(ManageContext)
	const { howParticipates, isLoading, isSuccess, totalHowParticipates } =
		useGetAllHowParticipates()
	const loadings = new Array(6).fill('')
	return (
		<div className={styles.list}>
			{isLoading &&
				loadings.map((el, index) => <LoaderHowParticipate key={index} />)}
			{isSuccess &&
				howParticipates?.map((participate, index) => (
					<HowParticipate
						key={index}
						participate={participate}
						position={index + 1}
					/>
				))}
			{!manage && (
				<div className={styles.button}>
					<GoToInvitationForm>Подать заявку на участие</GoToInvitationForm>
				</div>
			)}
		</div>
	)
}

export default List
