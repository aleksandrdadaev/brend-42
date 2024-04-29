'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCreateOrganizer } from '@/features/create-organizer'
import { SubmitButton } from '@/features/submit-button'

import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { IOrganizerForm } from '@/shared/model/types/organizer.type'
import Input from '@/shared/ui/input/Input'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IOrganizerForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useCreateOrganizer()
	const onSubmit: SubmitHandler<IOrganizerForm> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('name', {
					required: 'Введите имя',
				})}
				label='Введите имя организатора'
				placeholder='Имя'
				disabled={isPending}
				error={errors.name}
			/>
			<Input
				{...register('logo', {
					required: 'Выберите логотип',
					validate: value => validateInputImages(value),
				})}
				label='Логотип'
				type='file'
				disabled={isPending}
				error={errors.logo}
			/>
			<SubmitButton isPending={isPending}>Добавить</SubmitButton>
		</form>
	)
}

export default Form
