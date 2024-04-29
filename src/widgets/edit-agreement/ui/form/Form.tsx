'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditAgreement } from '@/features/edit-agreement'
import { SubmitButton } from '@/features/submit-button'

import { AgreementService } from '@/shared/api/services/agreement.service'
import { ITextForm } from '@/shared/model/types/form.type'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'
import Textarea from '@/shared/ui/textarea/Textarea'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<ITextForm>({
		mode: 'all',
		defaultValues: async () => {
			const data = await AgreementService.get()
			return {
				newText: data.data.data.text,
			}
		},
	})
	const { isPending, mutate } = useEditAgreement()
	const onSubmit: SubmitHandler<ITextForm> = data => {
		mutate(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Textarea
				{...register('newText', {
					required: 'Введите текст',
				})}
				label='Соглашение'
				rows={20}
				placeholder='Соглашение'
				disabled={isPending}
				error={errors.newText}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
