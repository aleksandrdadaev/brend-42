'use client'

import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditPartner } from '@/features/edit-partner'
import { SubmitButton } from '@/features/submit-button'

import { PartnerService } from '@/shared/api/services/partner.service'
import { IdContext } from '@/shared/lib/utils/context.util'
import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { IPartnerForm } from '@/shared/model/types/partner.type'
import Input from '@/shared/ui/input/Input'
import Textarea from '@/shared/ui/textarea/Textarea'

import styles from './Form.module.scss'

const Form: FC = () => {
	const id = useContext(IdContext)
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IPartnerForm>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: { data },
			} = await PartnerService.getById(id)
			return {
				...data,
				logo: new DataTransfer().files,
			}
		},
	})
	const { isPending, mutate } = useEditPartner()
	const onSubmit: SubmitHandler<IPartnerForm> = data => {
		mutate({ data, id })
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
					validate: value => validateInputImages(value),
				})}
				label='Логотип партнера'
				type='file'
				disabled={isPending}
				error={errors.logo}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
