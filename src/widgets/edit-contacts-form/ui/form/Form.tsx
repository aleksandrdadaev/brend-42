'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useEditContacts } from '@/features/edit-contacts'
import { SubmitButton } from '@/features/submit-button'

import { ContactsService } from '@/shared/api/services/contacts.service'
import { createPhoneNumber } from '@/shared/lib/utils/create-phone-number.util'
import {
	phoneIsValid,
	phoneRequired,
} from '@/shared/lib/utils/phone-input.util'
import { IContactsForm } from '@/shared/model/types/contacts.type'
import Input from '@/shared/ui/input/Input'
import PhoneInput from '@/shared/ui/input/PhoneInput'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

import styles from './Form.module.scss'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IContactsForm>({
		mode: 'all',
		defaultValues: async () => {
			const {
				data: {
					data: { address, email, number, whatsappLink, whatsappNumber },
				},
			} = await ContactsService.get()
			return {
				email,
				whatsappLink,
				whatsappNumber: createPhoneNumber(whatsappNumber),
				firstAddress: address[0],
				secondAddress: address[1],
				firstNumber: createPhoneNumber(number[0]),
				secondNumber: createPhoneNumber(number[1]),
			}
		},
	})
	const { isPending, mutate } = useEditContacts()
	const onSubmit: SubmitHandler<IContactsForm> = data => {
		mutate(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('email', {
					required: 'Введите Email',
				})}
				type='email'
				label='Email'
				placeholder='Email'
				disabled={isPending}
				error={errors.email}
			/>
			<div className={styles.whatsapp}>
				<PhoneInput
					{...register('whatsappNumber', {
						required: 'Введите телефон',
						validate: {
							required: value => phoneRequired(value),
							isValid: value => phoneIsValid(value),
						},
					})}
					label='Номер телефона Whatsapp'
					error={errors.whatsappNumber}
				/>
				<Input
					{...register('whatsappLink', {
						required: 'Введите ссылку на whatsapp',
					})}
					type='url'
					label='Ссылка Whatsapp'
					placeholder='Ссылка'
					disabled={isPending}
					error={errors.whatsappLink}
				/>
			</div>
			<div className={styles.block}>
				<h3>Кемерово</h3>
				<Input
					{...register('firstAddress', {
						required: 'Введите адрес',
					})}
					label='Адрес'
					placeholder='Адрес'
					disabled={isPending}
					error={errors.firstAddress}
				/>
				<PhoneInput
					{...register('firstNumber', {
						required: 'Введите телефон',
						validate: {
							required: value => phoneRequired(value),
							isValid: value => phoneIsValid(value),
						},
					})}
					label='Номер телефона'
					error={errors.firstNumber}
				/>
			</div>
			<div className={styles.block}>
				<h3>Новокузнецк</h3>
				<Input
					{...register('secondAddress', {
						required: 'Введите адрес',
					})}
					label='Адрес'
					placeholder='Адрес'
					disabled={isPending}
					error={errors.secondAddress}
				/>

				<PhoneInput
					{...register('secondNumber', {
						required: 'Введите телефон',
						validate: {
							required: value => phoneRequired(value),
							isValid: value => phoneIsValid(value),
						},
					})}
					label='Номер'
					error={errors.secondNumber}
				/>
			</div>

			<SubmitButton isPending={isPending}>Изменить</SubmitButton>
		</form>
	)
}

export default Form
