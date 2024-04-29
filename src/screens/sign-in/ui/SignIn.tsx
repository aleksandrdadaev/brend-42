import { FC } from 'react'

import { SignInForm } from '@/widgets/sign-in-form'

import styles from './SignIn.module.scss'

export const SignIn: FC = () => {
	return (
		<main className={styles.main}>
			<SignInForm />
		</main>
	)
}
