import { FC } from 'react'

import { BreadCrumbs } from '@/widgets/bread-crumbs'
import { ContactsBlock } from '@/widgets/contacts-block'

import { PageTitle } from '@/entities/page-title'

import styles from './Contacts.module.scss'
import ButtonLink from './button-link/ButtonLink'

export const Contacts: FC = () => {
	return (
		<main className={styles.page}>
			<BreadCrumbs />
			<PageTitle title='Контакты' />
			<section className={styles.text}>
				<span>
					Прием конкурсных материалов организован в Кузбасской ТПП и её
					представительствах:
				</span>
			</section>

			<ContactsBlock />
			{/* <AddressMap /> */}
			<ButtonLink />
		</main>
	)
}
