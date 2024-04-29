'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCreateHowParticipate } from '@/features/create-how-participate'
import { SubmitButton } from '@/features/submit-button'

import { IHowToAcceptForm } from '@/shared/model/types/how-to-accept.type'
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
	} = useForm<IHowToAcceptForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useCreateHowParticipate()
	const onSubmit: SubmitHandler<IHowToAcceptForm> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
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

			<SubmitButton isPending={isPending}>Добавить</SubmitButton>
		</form>
	)
}

export default Form
