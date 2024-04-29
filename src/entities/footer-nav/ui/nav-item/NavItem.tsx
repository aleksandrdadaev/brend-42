import Link from 'next/link'
import { FC } from 'react'

import { goToAnchor } from '@/shared/lib/utils/go-to-anchor.util'
import { INavLink } from '@/shared/model/types/nav-link.type'

import styles from './NavItem.module.scss'

const NavItem: FC<{ item: INavLink }> = ({ item }) => {
	return (
		<Link
			href={item.link}
			scroll={!item.anchor}
			className={styles.item}
			target={item.blanc ? '_blank' : '_self'}
			onClick={item.anchor ? () => goToAnchor(item.anchor, -100) : () => {}}
		>
			{item.text}
		</Link>
	)
}

export default NavItem
