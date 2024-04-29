import Image from 'next/image'
import { FC } from 'react'

import styles from './ButtonIcon.module.scss'

const ButtonIcon: FC<{ icon: string }> = ({ icon }) => {
	return (
		<Image src={icon} alt='' width={22} height={22} className={styles.icon} />
	)
}

export default ButtonIcon
