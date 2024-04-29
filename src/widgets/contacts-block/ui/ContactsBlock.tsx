'use client'

import { FC } from 'react'

import { useGetContacts } from '@/features/get-contacts'

import { ContactMap, LoaderContactMap } from '@/entities/contact-map'

import { maps } from '../config/map.config'

import styles from './ContactsBlock.module.scss'
import General from './general/General'
import LoaderGeneral from './general/loader/LoaderGeneral'

export const ContactsBlock: FC = () => {
	const { contacts, isError, isLoading, isSuccess } = useGetContacts()
	const array = new Array(2).fill('')
	return (
		<section className={styles.wrapper}>
			{isLoading && <LoaderGeneral />}
			{isSuccess && (
				<General
					email={contacts?.email || ''}
					whatsappLink={contacts?.whatsappLink || ''}
				/>
			)}
			{isLoading && array.map((el, index) => <LoaderContactMap key={index} />)}
			{isSuccess &&
				array.map((el, index) => (
					<ContactMap
						address={contacts?.address[index]}
						number={contacts?.number[index]}
						mapLink={maps[index]}
						key={index}
					/>
				))}
		</section>
	)
}
