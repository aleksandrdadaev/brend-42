'use client'

import { FC } from 'react'

import { GoToInvitationForm } from '@/features/go-to-invitation-form'

import arrowIcon from '@/shared/assets/icons/diagonal-arrow.svg'
import ButtonIcon from '@/shared/ui/button-icon/ButtonIcon'

import styles from './ButtonLink.module.scss'

const ButtonLink: FC = () => {
	return (
		<section className={styles.wrapper}>
			<GoToInvitationForm>
				Подать заявку <ButtonIcon icon={arrowIcon} />
			</GoToInvitationForm>
		</section>
	)
}

export default ButtonLink
