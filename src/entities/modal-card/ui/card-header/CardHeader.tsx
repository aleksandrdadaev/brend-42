import Image from 'next/image'
import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'
import SubTitle from '@/shared/ui/sub-title/SubTitle'

import { TypeCardHeader } from '../../model/modal-card.type'

import styles from './CardHeader.module.scss'

const CardHeader: FC<TypeCardHeader> = ({ logoPath, nameOfBrand }) => {
	return (
		<div className={styles.header}>
			<div className={styles.img}>
				<Image src={getImageUrl(logoPath)} alt={nameOfBrand} fill />
			</div>
			<h3 className={styles.title}>{nameOfBrand}</h3>
		</div>
	)
}

export default CardHeader
