'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditPrivacy } from '@/features/edit-privacy'
import { SubmitButton } from '@/features/submit-button'

import { PrivacyService } from '@/shared/api/services/privacy.service'
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
			const data = await PrivacyService.get()
			return {
				newText: data.data.data.text,
			}
		},
	})
	const { isPending, mutate } = useEditPrivacy()
	const onSubmit: SubmitHandler<ITextForm> = data => {
		mutate(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Textarea
				{...register('newText', {
					required: 'Введите текст',
				})}
				rows={20}
				label='Политика'
				placeholder='Политика'
				disabled={isPending}
				error={errors.newText}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
