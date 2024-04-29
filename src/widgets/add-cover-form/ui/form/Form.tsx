'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAddCover } from '@/features/add-cover'

import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { ICoverForm } from '@/shared/model/types/cover.type'
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
	} = useForm<ICoverForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useAddCover()
	const onSubmit: SubmitHandler<ICoverForm> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('photos', {
					required: 'Выберите фотографию',
					validate: value => validateInputImages(value),
				})}
				label='Фото'
				type='file'
				multiple
				disabled={isPending}
				error={errors.photos}
			/>
			<button type='submit' className={'button'} disabled={isPending}>
				{isPending ? <MiniLoader /> : 'Добавить'}
			</button>
		</form>
	)
}

export default Form
