import { FC } from 'react'

import { footerNavLinks } from '@/shared/config/footer-nav-links.config'

import styles from './FooterNav.module.scss'
import NavItem from './nav-item/NavItem'

export const FooterNav: FC = () => {
	return (
		<nav>
			<ul className={styles.nav}>
				{footerNavLinks.map(item => (
					<li key={item.text}>
						<NavItem item={item} />
					</li>
				))}
			</ul>
		</nav>
	)
}
