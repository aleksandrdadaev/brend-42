'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditCommission } from '@/features/edit-commission'
import { SubmitButton } from '@/features/submit-button'

import { validateInputPdf } from '@/shared/lib/utils/validate-input-pdf.util'
import { IFileForm } from '@/shared/model/types/form.type'
import Input from '@/shared/ui/input/Input'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IFileForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useEditCommission()

	const onSubmit: SubmitHandler<IFileForm> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register('file', {
					required: 'Выберите файл',
					validate: value => validateInputPdf(value),
				})}
				label='Файл (pdf)'
				type='file'
				disabled={isPending}
				error={errors.file}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
