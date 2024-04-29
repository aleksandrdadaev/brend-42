'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCreateNomination } from '@/features/create-nomination'
import { SubmitButton } from '@/features/submit-button'

import { validateInputPdf } from '@/shared/lib/utils/validate-input-pdf.util'
import { INominationForm } from '@/shared/model/types/nomination.type'
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
	} = useForm<INominationForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useCreateNomination()
	const onSubmit: SubmitHandler<INominationForm> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('name', {
					required: 'Введите название',
				})}
				label='Название номинации'
				placeholder='Название'
				disabled={isPending}
				error={errors.name}
			/>
			<Textarea
				{...register('description', {
					required: 'Введите описание',
				})}
				label='Описание номинации'
				placeholder='Описание'
				disabled={isPending}
				error={errors.description}
			/>
			<Input
				{...register('file', {
					validate: value => validateInputPdf(value),
				})}
				label='Файл (pdf)*'
				type='file'
				disabled={isPending}
				error={errors.file}
			/>
			<SubmitButton isPending={isPending}>Добавить</SubmitButton>
		</form>
	)
}

export default Form
