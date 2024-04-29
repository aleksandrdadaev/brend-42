'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditCondition } from '@/features/edit-condition'
import { useEditPurposeCompetition } from '@/features/edit-purpose-competition'
import { SubmitButton } from '@/features/submit-button'

import { ConditionService } from '@/shared/api/services/condition.service'
import { IConditionForm } from '@/shared/model/types/condition.type'
import Textarea from '@/shared/ui/textarea/Textarea'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<IConditionForm>({
		mode: 'all',
		defaultValues: async () => {
			const data = await ConditionService.get()
			return {
				text: data.data.data.text,
			}
		},
	})
	const { isPending, mutate } = useEditCondition()
	const onSubmit: SubmitHandler<IConditionForm> = data => {
		mutate(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Textarea
				{...register('text', {
					required: 'Введите текст',
				})}
				label='Условия участия'
				placeholder='Условия'
				disabled={isPending}
				error={errors.text}
			/>
			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
