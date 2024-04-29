'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditContest } from '@/features/edit-contest'
import { SubmitButton } from '@/features/submit-button'

import { CompetitionService } from '@/shared/api/services/competition.service'
import { IContest } from '@/shared/model/types/info-competition.type'
import Input from '@/shared/ui/input/Input'

import { validateNumber } from '../../lib/util/validate-number.util'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IContest>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: { data },
			} = await CompetitionService.getContest()
			return {
				...data,
			}
		},
	})
	const { isPending, mutate } = useEditContest()
	const onSubmit: SubmitHandler<IContest> = data => {
		mutate(data)
		console.table(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('title', {
					required: 'Введите заголовок',
				})}
				label='Заголовок в главном блоке'
				placeholder='Заголовок'
				disabled={isPending}
				error={errors.title}
			/>
			<div className={styles.fields}>
				<Input
					{...register('year', {
						required: 'Введите год',
						valueAsNumber: true,
						min: validateNumber,
					})}
					type='number'
					label='Год'
					placeholder='Год'
					disabled={isPending}
					error={errors.year}
				/>
				<Input
					{...register('participants', {
						required: 'Введите количество участников',
						valueAsNumber: true,
						min: validateNumber,
					})}
					type='number'
					label='Кол-во участников'
					placeholder='участники'
					disabled={isPending}
					error={errors.participants}
				/>
				<Input
					{...register('trademarks', {
						required: 'Введите количество торговых марок',
						valueAsNumber: true,
						min: validateNumber,
					})}
					type='number'
					label='Кол-во торговых марок'
					placeholder='марки'
					disabled={isPending}
					error={errors.trademarks}
				/>
				<Input
					{...register('experts', {
						required: 'Введите количество экспертов',
						valueAsNumber: true,
						min: validateNumber,
					})}
					type='number'
					label='Кол-во экспертов'
					placeholder='эксперты'
					disabled={isPending}
					error={errors.experts}
				/>
			</div>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
