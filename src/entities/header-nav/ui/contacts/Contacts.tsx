import { FC } from 'react'

import whatsappIcon from '@/shared/assets/icons/whatsapp.svg'
import { IContacts } from '@/shared/model/types/contacts.type'
import ContactIcon from '@/shared/ui/contact-icon/ContactIcon'
import LoaderIcon from '@/shared/ui/loader-icon/LoaderIcon'

import styles from './Contacts.module.scss'

const Contacts: FC<{
	contacts: IContacts | undefined
	isLoading: boolean
}> = ({ contacts, isLoading }) => {
	return (
		<div className={styles.contacts}>
			{isLoading ? (
				<LoaderIcon classname={styles.icon} />
			) : (
				<ContactIcon
					icon={whatsappIcon}
					text='Whatsapp'
					link={contacts?.whatsappLink || '/'}
					className={styles.icon}
				/>
			)}
		</div>
	)
}

export default Contacts
