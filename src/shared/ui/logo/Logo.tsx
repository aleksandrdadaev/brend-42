import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/shared/assets/icons/logo.svg'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href='/'>
			<Image
				src={logo}
				alt='Бренд-42'
				width={50}
				height={52}
				className={styles.logo}
			/>
		</Link>
	)
}

export default Logo
