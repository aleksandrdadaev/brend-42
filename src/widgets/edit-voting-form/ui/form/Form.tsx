'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditVote } from '@/features/edit-vote'
import { SubmitButton } from '@/features/submit-button'

import { VoteService } from '@/shared/api/services/vote.service'
import { IVote } from '@/shared/model/types/vote.type'
import Input from '@/shared/ui/input/Input'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,

		formState: { errors, defaultValues },
	} = useForm<IVote>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: { data },
			} = await VoteService.get()
			return {
				...data,
			}
		},
	})
	const { isPending, mutate } = useEditVote()
	const onSubmit: SubmitHandler<IVote> = data => {
		mutate(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('text', {
					required: 'Введите текст',
				})}
				label='Текст (когда голосование отключено)'
				placeholder='Текст'
				disabled={isPending}
				error={errors.text}
			/>
			<Input
				{...register('link', {
					required: 'Введите ссылку',
				})}
				type='url'
				label='Ссылка на голосование'
				placeholder='Ссылка'
				disabled={isPending}
				error={errors.link}
			/>
			<Input
				{...register('votingId', {
					required: 'Введите id',
					valueAsNumber: true,
				})}
				label='ID голосования'
				placeholder='id'
				disabled={isPending}
				error={errors.votingId}
			/>
			<Input
				{...register('isEnabled')}
				label='Вкл/выкл'
				type='checkbox'
				disabled={isPending}
				error={errors.votingId}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
