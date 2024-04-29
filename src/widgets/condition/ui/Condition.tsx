'use client'

import { FC, useContext } from 'react'
import { Element } from 'react-scroll'

import { GoToInvitationForm } from '@/features/go-to-invitation-form'

import arrowIcon from '@/shared/assets/icons/diagonal-arrow.svg'
import { ManageContext } from '@/shared/lib/utils/context.util'
import ButtonIcon from '@/shared/ui/button-icon/ButtonIcon'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import styles from './Condition.module.scss'
import Text from './text/Text'

export const Condition: FC = () => {
	const manage = useContext(ManageContext)
	return (
		<section className={styles.wrapper}>
			<SubTitle animate={!manage}>Условия участия</SubTitle>
			<Element name='terms of participation' className='w-full'>
				<div className={styles.content}>
					<Text />
					{!manage && (
						<GoToInvitationForm classname={styles.button}>
							Принять участие <ButtonIcon icon={arrowIcon} />
						</GoToInvitationForm>
					)}
				</div>
			</Element>
		</section>
	)
}
