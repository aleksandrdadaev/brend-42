'use client'

import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditAlbumName } from '@/features/edit-album-name'
import { SubmitButton } from '@/features/submit-button'

import { AlbumService } from '@/shared/api/services/album.service'
import { IdContext } from '@/shared/lib/utils/context.util'
import { IAlbumNameForm } from '@/shared/model/types/album.type'
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
	} = useForm<IAlbumNameForm>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: { data },
			} = await AlbumService.getById(id)
			return {
				name: data.name,
			}
		},
	})
	const { isPending, mutate } = useEditAlbumName()
	const onSubmit: SubmitHandler<IAlbumNameForm> = data => {
		mutate({ data, id })
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

			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
