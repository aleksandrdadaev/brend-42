import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { INavLink } from '@/shared/model/types/nav-link.type'

import styles from './NavItem.module.scss'

const NavItem: FC<INavLink> = ({ link, text }) => {
	const pathname = usePathname()
	return (
		<li>
			<Link
				href={link}
				className={clsx(styles.item, {
					[styles.active]: pathname === link,
				})}
			>
				{text}
			</Link>
		</li>
	)
}

export default NavItem
