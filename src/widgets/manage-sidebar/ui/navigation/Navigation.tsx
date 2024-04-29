import { FC } from 'react'

import NavItem from '@/shared/ui/nav-item/NavItem'

import { manageNavLinks } from '../../config/manage-nav.config'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<ul className={styles.list}>
			{manageNavLinks.map(({ link, text }) => (
				<NavItem link={link} text={text} key={text} />
			))}
		</ul>
	)
}

export default Navigation
