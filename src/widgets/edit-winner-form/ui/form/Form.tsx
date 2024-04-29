'use client'

import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditWinner } from '@/features/edit-winner'
import { SubmitButton } from '@/features/submit-button'

import { WinnerService } from '@/shared/api/services/winner.service'
import { IdContext } from '@/shared/lib/utils/context.util'
import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { validateInputPdf } from '@/shared/lib/utils/validate-input-pdf.util'
import { IWinnerForm } from '@/shared/model/types/winner.type'
import Input from '@/shared/ui/input/Input'

import styles from './Form.module.scss'

const Form: FC = () => {
	const id = useContext(IdContext)
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IWinnerForm>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: { data },
			} = await WinnerService.getById(id)
			return {
				name: data.nameFile,
				file: new DataTransfer().files,
				preview: new DataTransfer().files,
			}
		},
	})
	const { isPending, mutate } = useEditWinner()
	const onSubmit: SubmitHandler<IWinnerForm> = data => {
		mutate({ data, id })
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
					validate: value => validateInputPdf(value),
				})}
				label='Каталог (pdf)'
				type='file'
				disabled={isPending}
				error={errors.file}
			/>
			<Input
				{...register('preview', {
					validate: value => validateInputImages(value),
				})}
				label='Превью каталога (скрин)'
				type='file'
				disabled={isPending}
				error={errors.preview}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
