'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCreateEvent } from '@/features/create-event'
import { SubmitButton } from '@/features/submit-button'

import { IEvent } from '@/shared/model/types/event.type'
import Input from '@/shared/ui/input/Input'
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
	} = useForm<Omit<IEvent, '_id'>>({
		mode: 'all',
	})
	const { isPending, mutate } = useCreateEvent()
	const onSubmit: SubmitHandler<Omit<IEvent, '_id'>> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('name', {
					required: 'Введите заголовок',
				})}
				label='Заголовок события'
				placeholder='Заголовок'
				disabled={isPending}
				error={errors.name}
			/>
			<Textarea
				{...register('description', {
					required: 'Введите описание',
				})}
				label='Описание события'
				rows={5}
				placeholder='Описание'
				disabled={isPending}
				error={errors.description}
			/>
			<Input
				{...register('date', {
					required: 'Введите дату',
				})}
				label='Дата события'
				placeholder='Дата'
				disabled={isPending}
				error={errors.date}
			/>

			<SubmitButton isPending={isPending}>Добавить</SubmitButton>
		</form>
	)
}

export default Form
