'use client'

import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useLogin } from '@/features/login'

import { ISignInForm } from '@/shared/model/types/auth.type'
import Input from '@/shared/ui/input/Input'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

import { incorrect } from '../lib/util/incorrect.util'

import styles from './SignInForm.module.scss'

export const SignInForm: FC = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<ISignInForm>({
		mode: 'all',
	})

	const { isLoading, mutate } = useLogin()
	const onSubmit: SubmitHandler<ISignInForm> = data => {
		mutate(data, {
			onError: error => {
				if (error.response?.status === 401)
					incorrect({ reset: reset, setError: setError })
			},
		})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('username', { required: 'Обязательное поле' })}
				label='Логин'
				placeholder='Логин'
				disabled={isLoading}
				error={errors.username}
			/>
			<Input
				{...register('password', { required: 'Обязательное поле' })}
				label='Пароль'
				type='password'
				placeholder='Пароль'
				disabled={isLoading}
				error={errors.password}
			/>
			<button type='submit' className={styles.send} disabled={isLoading}>
				{isLoading ? <MiniLoader /> : 'Войти'}
			</button>
		</form>
	)
}

export default SignInForm
