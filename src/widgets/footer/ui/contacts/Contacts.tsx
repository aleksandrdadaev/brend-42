import { FC } from 'react'

import { useGetContacts } from '@/features/get-contacts'

import emailIcon from '@/shared/assets/icons/contacts/email.svg'
import phoneIcon from '@/shared/assets/icons/contacts/phone.svg'
import whatsappIcon from '@/shared/assets/icons/contacts/whatsapp.svg'
import { createPhoneNumber } from '@/shared/lib/utils/create-phone-number.util'

import styles from './Contacts.module.scss'
import Contact from './contact/Contact'
import LoaderContact from './contact/loader/LoaderContact'

const Contacts: FC = () => {
	const { contacts, isError, isLoading, isSuccess } = useGetContacts()
	const loadings = new Array(3).fill('')
	return (
		<div className={styles.wrapper}>
			{isLoading && loadings.map((el, index) => <LoaderContact key={index} />)}
			{isSuccess && (
				<>
					<Contact
						icon={phoneIcon}
						link={`tel:${contacts?.number[0]}`}
						text={createPhoneNumber(contacts?.number[0] || '')}
					/>
					<Contact
						icon={emailIcon}
						link={`mailto:${contacts?.email}`}
						text={contacts?.email || ''}
					/>
					<Contact
						icon={whatsappIcon}
						link={contacts?.whatsappLink || ''}
						text={createPhoneNumber(contacts?.whatsappNumber || '')}
						blanc
					/>
				</>
			)}
		</div>
	)
}

export default Contacts
