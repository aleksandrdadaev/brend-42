'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCreateVideo } from '@/features/create-video'
import { SubmitButton } from '@/features/submit-button'

import { IVideoForm } from '@/shared/model/types/video.type'
import Input from '@/shared/ui/input/Input'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IVideoForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useCreateVideo()
	const onSubmit: SubmitHandler<IVideoForm> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
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

			<SubmitButton isPending={isPending}>Добавить</SubmitButton>
		</form>
	)
}

export default Form
