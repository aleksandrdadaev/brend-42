'use client'

import Image from 'next/image'
import { FC, useContext } from 'react'

import { getImageUrl } from '@/shared/config/api.config'
import { ManageContext } from '@/shared/lib/utils/context.util'
import { IPartner } from '@/shared/model/types/partner.type'

import styles from './Partner.module.scss'
import Manage from './manage/Manage'

export const Partner: FC<{ partner: IPartner }> = ({
	partner: { _id, description, logoPath, nameOfCompany },
}) => {
	const manage = useContext(ManageContext)

	return (
		<article className={styles.wrapper}>
			<div className={styles.img}>
				<Image src={getImageUrl(logoPath)} alt={nameOfCompany} fill />
			</div>
			<p className={styles.text}>
				<span className={styles.title}>{nameOfCompany} </span>
				{description}
			</p>
			{manage && <Manage id={_id} />}
		</article>
	)
}
