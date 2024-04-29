import { FC } from 'react'

import { headerNavLinks } from '@/shared/config/header-nav-links.config'
import NavItem from '@/shared/ui/nav-item/NavItem'

import styles from './NavList.module.scss'

const NavList: FC = () => {
	return (
		<ul className={styles.list}>
			{headerNavLinks.map(({ link, text }) => (
				<NavItem link={link} text={text} key={text} />
			))}
		</ul>
	)
}

export default NavList
