'use client'

import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditHowParticipate } from '@/features/edit-how-participate'
import { SubmitButton } from '@/features/submit-button'

import { HowToAcceptService } from '@/shared/api/services/how-to-accept.service'
import { IdContext } from '@/shared/lib/utils/context.util'
import { IHowToAcceptForm } from '@/shared/model/types/how-to-accept.type'
import Input from '@/shared/ui/input/Input'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IHowToAcceptForm>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: { data },
			} = await HowToAcceptService.getById(id)
			return {
				text: data.text,
			}
		},
	})
	const { isPending, mutate } = useEditHowParticipate()
	const id = useContext(IdContext)
	const onSubmit: SubmitHandler<IHowToAcceptForm> = data => {
		mutate({ data, id })
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('text', {
					required: 'Введите заголовок',
				})}
				label='Заголовок этапа'
				placeholder='Заголовок'
				disabled={isPending}
				error={errors.text}
			/>

			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
