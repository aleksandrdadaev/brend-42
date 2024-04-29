'use client'

import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditEvent } from '@/features/edit-event'
import { SubmitButton } from '@/features/submit-button'

import { EventService } from '@/shared/api/services/event.service'
import { IdContext } from '@/shared/lib/utils/context.util'
import { IEvent } from '@/shared/model/types/event.type'
import Input from '@/shared/ui/input/Input'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'
import Textarea from '@/shared/ui/textarea/Textarea'

import styles from './Form.module.scss'

const Form: FC = () => {
	const id = useContext(IdContext)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IEvent>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: { data },
			} = await EventService.getById(id)
			return {
				...data,
			}
		},
	})
	const { isPending, mutate } = useEditEvent()
	const onSubmit: SubmitHandler<IEvent> = data => {
		mutate(data)
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

			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
