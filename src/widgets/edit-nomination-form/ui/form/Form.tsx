'use client'

import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditNomination } from '@/features/edit-nomination'
import { SubmitButton } from '@/features/submit-button'

import { NominationService } from '@/shared/api/services/nomination.service'
import { IdContext } from '@/shared/lib/utils/context.util'
import { validateInputPdf } from '@/shared/lib/utils/validate-input-pdf.util'
import { INominationForm } from '@/shared/model/types/nomination.type'
import Input from '@/shared/ui/input/Input'
import Textarea from '@/shared/ui/textarea/Textarea'

import styles from './Form.module.scss'

const Form: FC = () => {
	const id = useContext(IdContext)
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<INominationForm>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: { data },
			} = await NominationService.getById(id)
			return {
				...data,
				file: new DataTransfer().files,
			}
		},
	})
	const { isPending, mutate } = useEditNomination()
	const onSubmit: SubmitHandler<INominationForm> = data => {
		mutate({ data, id })
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
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
