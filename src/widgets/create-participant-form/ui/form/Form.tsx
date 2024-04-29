'use client'

import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import AsyncSelect from 'react-select/async'

import { useCreateParticipant } from '@/features/create-participant'
import { useDistrictsSelect } from '@/features/districts-select'
import { useGetAllDistricts } from '@/features/get-all-districts'
import { SubmitButton } from '@/features/submit-button'

import { validateInputImages } from '@/shared/lib/utils/validate-input-images.util'
import { IParticipantForm } from '@/shared/model/types/participant.type'
import Input from '@/shared/ui/input/Input'
import InputSelectAsync from '@/shared/ui/input/input-select-async/InputSelectAsync'
import Textarea from '@/shared/ui/textarea/Textarea'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		setValue,
		control,
		reset,
		formState: { errors },
	} = useForm<IParticipantForm>({
		mode: 'all',
	})
	const { isPending, mutate } = useCreateParticipant()
	const onSubmit: SubmitHandler<IParticipantForm> = data => {
		mutate(data, {
			onSuccess: () => reset(),
		})
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
							required: 'Выберите логотип участника',
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

			<SubmitButton isPending={isPending}>Добавить</SubmitButton>
		</form>
	)
}

export default Form
