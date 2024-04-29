'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCreateWinner } from '@/features/create-winner'
import { SubmitButton } from '@/features/submit-button'

import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { validateInputPdf } from '@/shared/lib/utils/validate-input-pdf.util'
import { IWinnerForm } from '@/shared/model/types/winner.type'
import Input from '@/shared/ui/input/Input'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IWinnerForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useCreateWinner()
	const onSubmit: SubmitHandler<IWinnerForm> = data => {
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
				label='Название каталога'
				placeholder='Название'
				disabled={isPending}
				error={errors.name}
			/>
			<Input
				{...register('file', {
					required: 'Выберите файл',
					validate: value => validateInputPdf(value),
				})}
				label='Каталог (pdf)'
				type='file'
				disabled={isPending}
				error={errors.file}
			/>
			<Input
				{...register('preview', {
					required: 'Выберите превью',
					validate: value => validateInputImages(value),
				})}
				label='Превью каталога (скрин)'
				type='file'
				disabled={isPending}
				error={errors.preview}
			/>
			<SubmitButton isPending={isPending}>Добавить</SubmitButton>
		</form>
	)
}

export default Form
