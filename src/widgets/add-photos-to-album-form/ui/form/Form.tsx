'use client'

import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAddPhotosToAlbum } from '@/features/add-photos-to-album'
import { useCreateVideo } from '@/features/create-video'
import { SubmitButton } from '@/features/submit-button'

import { IdContext } from '@/shared/lib/utils/context.util'
import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { IAlbumPhotosForm } from '@/shared/model/types/album.type'
import { IVideoForm } from '@/shared/model/types/video.type'
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
	} = useForm<IAlbumPhotosForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useAddPhotosToAlbum()
	const onSubmit: SubmitHandler<IAlbumPhotosForm> = data => {
		mutate(
			{ data, id },
			{
				onSuccess: () => reset(),
			}
		)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('photos', {
					required: 'Выберите фото',
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
