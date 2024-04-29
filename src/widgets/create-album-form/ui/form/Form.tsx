'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCreateAlbum } from '@/features/create-album'
import { SubmitButton } from '@/features/submit-button'

import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { IAlbumForm } from '@/shared/model/types/album.type'
import Input from '@/shared/ui/input/Input'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IAlbumForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useCreateAlbum()
	const onSubmit: SubmitHandler<IAlbumForm> = data => {
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
				label='Название альбома'
				placeholder='Название'
				disabled={isPending}
				error={errors.name}
			/>
			<Input
				{...register('photos', {
					validate: value => validateInputImages(value),
				})}
				label='Фотографии альбома'
				type='file'
				multiple
				disabled={isPending}
				error={errors.photos}
			/>

			<SubmitButton isPending={isPending}>Добавить</SubmitButton>
		</form>
	)
}

export default Form
