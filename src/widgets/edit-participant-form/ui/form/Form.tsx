'use client'

import { FC, useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useCreateParticipant } from '@/features/create-participant'
import { useDistrictsSelect } from '@/features/districts-select'
import { useEditParticipant } from '@/features/edit-participant'
import { SubmitButton } from '@/features/submit-button'

import { ParticipantService } from '@/shared/api/services/participant.service'
import { IdContext } from '@/shared/lib/utils/context.util'
import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { IParticipantForm } from '@/shared/model/types/participant.type'
import Input from '@/shared/ui/input/Input'
import InputSelectAsync from '@/shared/ui/input/input-select-async/InputSelectAsync'
import Textarea from '@/shared/ui/textarea/Textarea'

import styles from './Form.module.scss'

const Form: FC = () => {
	const id = useContext(IdContext)
	const {
		register,
		handleSubmit,
		setValue,
		control,
		reset,
		formState: { errors },
	} = useForm<IParticipantForm>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: { data },
			} = await ParticipantService.getBy(id)
			return {
				...data[0],
				logo: new DataTransfer().files,
			}
		},
	})
	const { isPending, mutate } = useEditParticipant()
	const onSubmit: SubmitHandler<IParticipantForm> = data => {
		mutate({ data, id })
	}

	const { districts, promiseOptions } = useDistrictsSelect()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.fields}>
				<div className={styles.left}>
					{' '}
					<Input
						{...register('nameOfBrand', {
							required: 'Введите название бренда',
						})}
						label='Название бренда'
						placeholder='Бренд'
						disabled={isPending}
						error={errors.nameOfBrand}
					/>
					<Input
						{...register('nameOfCompany', {
							required: 'Введите название компании',
						})}
						label='Название компании'
						placeholder='Компания'
						disabled={isPending}
						error={errors.nameOfCompany}
					/>
					<Input
						{...register('address', {
							required: 'Введите адрес',
						})}
						label='Адрес участника'
						placeholder='Адрес'
						disabled={isPending}
						error={errors.address}
					/>
					<Controller
						name='district'
						control={control}
						rules={{
							required: 'Выберите район участника',
						}}
						render={({
							field: { onChange, ref, value },
							fieldState: { error },
						}) => (
							<InputSelectAsync
								ref={ref}
								value={districts.find(c => c.value === value)}
								// @ts-ignore
								onChange={val => onChange(val?.value)}
								// @ts-ignore
								defaultOptions={districts}
								error={error}
								loadOptions={promiseOptions}
								label='Район участника'
								placeholder='Район'
							/>
						)}
					/>
					<Input
						{...register('logo', {
							validate: value => validateInputImages(value),
						})}
						label='Логотип участника'
						type='file'
						disabled={isPending}
						error={errors.logo}
					/>
				</div>

				<Textarea
					{...register('description', {
						required: 'Введите описание участника',
					})}
					label='Описание участника'
					placeholder='Описание'
					rows={15}
					disabled={isPending}
					error={errors.description}
				/>
			</div>

			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
