'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditFooter } from '@/features/edit-footer'
import { SubmitButton } from '@/features/submit-button'

import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { IFooterForm } from '@/shared/model/types/footer.type'
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
	} = useForm<IFooterForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useEditFooter()
	const onSubmit: SubmitHandler<IFooterForm> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('photo', {
					required: 'Выберите фотографию',
					validate: value => validateInputImages(value),
				})}
				label='Фото'
				type='file'
				disabled={isPending}
				error={errors.photo}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
