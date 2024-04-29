'use client'

import { FC } from 'react'

import { GoToInvitationForm } from '@/features/go-to-invitation-form'

import { useResize } from '@/shared/lib/hooks/useResize'

import styles from './HeaderLink.module.scss'

export const HeaderLink: FC = () => {
	const { width, isTablet, isMobile } = useResize()
	return (
		<GoToInvitationForm classname={styles.link}>
			{isMobile ? 'Участие' : isTablet ? 'Принять уч.' : 'Принять участие'}
		</GoToInvitationForm>
	)
}
