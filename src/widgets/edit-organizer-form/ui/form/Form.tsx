'use client'

import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditOrganizer } from '@/features/edit-organizer'
import { SubmitButton } from '@/features/submit-button'

import { CompetitionService } from '@/shared/api/services/competition.service'
import { getImageUrl } from '@/shared/config/api.config'
import { IdContext } from '@/shared/lib/utils/context.util'
import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { IOrganizerForm } from '@/shared/model/types/organizer.type'
import Input from '@/shared/ui/input/Input'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

import styles from './Form.module.scss'

const Form: FC = () => {
	const id = useContext(IdContext)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IOrganizerForm>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: {
					data: { logoPath, name },
				},
			} = await CompetitionService.getOrganizerById(id)
			return {
				name,
				logo: new DataTransfer().files,
			}
		},
	})
	const { isPending, mutate } = useEditOrganizer()
	const onSubmit: SubmitHandler<IOrganizerForm> = data => {
		mutate({ data, id })
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('name', {
					required: 'Введите имя',
				})}
				label='Введите имя организатора'
				placeholder='Имя'
				disabled={isPending}
				error={errors.name}
			/>
			<Input
				{...register('logo', {
					validate: value => validateInputImages(value),
				})}
				label='Логотип'
				type='file'
				disabled={isPending}
				error={errors.logo}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
