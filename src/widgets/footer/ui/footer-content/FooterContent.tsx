'use client'

import { FC } from 'react'

import { FooterNav } from '@/entities/footer-nav'

import Contacts from '../contacts/Contacts'
import Organizers from '../organizers/Organizers'

import styles from './FooterContent.module.scss'

const FooterContent: FC = () => {
	return (
		<div className={styles.content}>
			<Organizers />
			<FooterNav />
			<Contacts />
		</div>
	)
}

export default FooterContent
