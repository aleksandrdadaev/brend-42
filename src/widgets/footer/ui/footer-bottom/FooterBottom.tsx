import { FC } from 'react'

import { developerCompany } from '@/shared/config/contacts.config'

import Address from '../address/Address'

import styles from './FooterBottom.module.scss'

const FooterBottom: FC = () => {
	return (
		<div className={styles.bottom}>
			<span>Copyright © 2024, Бренд-42</span>
			<Address />
			<span>Сайт создан {developerCompany.text}</span>
		</div>
	)
}

export default FooterBottom
