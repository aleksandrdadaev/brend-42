'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCreatePartner } from '@/features/create-partner'
import { SubmitButton } from '@/features/submit-button'

import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { IPartnerForm } from '@/shared/model/types/partner.type'
import Input from '@/shared/ui/input/Input'
import Textarea from '@/shared/ui/textarea/Textarea'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IPartnerForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useCreatePartner()
	const onSubmit: SubmitHandler<IPartnerForm> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('nameOfCompany', {
					required: 'Введите название',
				})}
				label='Название партнера'
				placeholder='Название'
				disabled={isPending}
				error={errors.nameOfCompany}
			/>
			<Textarea
				{...register('description', {
					required: 'Введите описание',
				})}
				label='Описание партнера'
				placeholder='Описание'
				disabled={isPending}
				error={errors.description}
			/>
			<Input
				{...register('logo', {
					required: 'Выберите логотип партнера',
					validate: value => validateInputImages(value),
				})}
				label='Логотип партнера'
				type='file'
				disabled={isPending}
				error={errors.logo}
			/>
			<SubmitButton isPending={isPending}>Добавить</SubmitButton>
		</form>
	)
}

export default Form
