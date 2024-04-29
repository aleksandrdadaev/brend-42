'use client'

import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditVideo } from '@/features/edit-video'
import { SubmitButton } from '@/features/submit-button'

import { VideoService } from '@/shared/api/services/video.service'
import { IdContext } from '@/shared/lib/utils/context.util'
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
	} = useForm<IVideoForm>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: { data },
			} = await VideoService.getById(id)
			return {
				...data,
			}
		},
	})
	const { isPending, mutate } = useEditVideo()
	const onSubmit: SubmitHandler<IVideoForm> = data => {
		mutate({ data, id })
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('videoLink', {
					required: 'Введите ссылку',
				})}
				label='Ссылка на видео'
				type='url'
				placeholder='Ссылка'
				disabled={isPending}
				error={errors.videoLink}
			/>
			<Input
				{...register('videoCaption', {
					required: 'Введите подпись',
				})}
				label='Подпись под видео'
				placeholder='Подпись'
				disabled={isPending}
				error={errors.videoCaption}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
