'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditPurposeCompetition } from '@/features/edit-purpose-competition'
import { SubmitButton } from '@/features/submit-button'

import { CompetitionService } from '@/shared/api/services/competition.service'
import { IPurpose } from '@/shared/model/types/purpose.type'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'
import Textarea from '@/shared/ui/textarea/Textarea'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IPurpose>({
		mode: 'all',
		defaultValues: async () => {
			const data = await CompetitionService.getPurpose()
			return {
				text: data.data.data.text,
			}
		},
	})
	const { isPending, mutate } = useEditPurposeCompetition()
	const onSubmit: SubmitHandler<IPurpose> = data => {
		mutate(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Textarea
				{...register('text', {
					required: 'Введите текст',
				})}
				rows={5}
				label='Цель конкурса'
				placeholder='Цель'
				disabled={isPending}
				error={errors.text}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
