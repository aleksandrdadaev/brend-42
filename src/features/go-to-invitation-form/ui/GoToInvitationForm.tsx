import clsx from 'clsx'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

import { goToInvitationForm } from '../lib/utils/go-to-invitation-form.util'

import styles from './GoToInvitationForm.module.scss'

export const GoToInvitationForm: FC<
	PropsWithChildren<{ classname?: string }>
> = ({ children, classname }) => {
	return (
		<Link
			href='/'
			scroll={false}
			className={clsx(styles.link, classname)}
			onClick={goToInvitationForm}
		>
			{children}
		</Link>
	)
}
