'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCreateNews } from '@/features/create-news'
import { SubmitButton } from '@/features/submit-button'

import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { INewsForm } from '@/shared/model/types/news.type'
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
	} = useForm<INewsForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useCreateNews()
	const onSubmit: SubmitHandler<INewsForm> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.fields}>
				<div className={styles.left}>
					<Input
						{...register('name', {
							required: 'Введите название новости',
						})}
						label='Название новости'
						placeholder='Название'
						disabled={isPending}
						error={errors.name}
					/>
					<Input
						{...register('slug', {
							required: 'Введите ссылку',
						})}
						label='Строка в ссылке (Пример: nazvanie-novosti)'
						placeholder='Ссылка'
						disabled={isPending}
						error={errors.slug}
					/>
					<Input
						{...register('newsDate', {
							required: 'Введите дату новости',
						})}
						label='Дата новости'
						type='date'
						disabled={isPending}
						error={errors.newsDate}
					/>
					<Input
						{...register('image', {
							required: 'Выберите обложку новости',
							validate: value => validateInputImages(value),
						})}
						label='Обложка новости'
						type='file'
						disabled={isPending}
						error={errors.image}
					/>
					<Input
						{...register('photoCaption', {
							required: 'Введите подпись под фото',
						})}
						label='Подпись под фото'
						placeholder='Подпись'
						disabled={isPending}
						error={errors.photoCaption}
					/>
				</div>
				<Textarea
					{...register('newsText', {
						required: 'Введите текст новости',
					})}
					label='Текст новости'
					placeholder='Текст'
					rows={20}
					disabled={isPending}
					error={errors.newsText}
				/>
			</div>

			<SubmitButton isPending={isPending}>Добавить</SubmitButton>
		</form>
	)
}

export default Form
