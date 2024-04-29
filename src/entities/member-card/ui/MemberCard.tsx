'use client'

import Image from 'next/image'
import { FC, useContext } from 'react'

import { getImageUrl } from '@/shared/config/api.config'
import { ManageContext } from '@/shared/lib/utils/context.util'
import { IParticipant } from '@/shared/model/types/participant.type'
import CardTitle from '@/shared/ui/card-title/CardTitle'

import styles from './MemberCard.module.scss'
import Manage from './manage/Manage'

export const MemberCard: FC<{
	member: IParticipant
	clickHandler?: (event: React.MouseEvent<HTMLElement>) => void
}> = ({
	member: { logoPath, nameOfBrand, nameOfCompany, _id },
	clickHandler,
}) => {
	const manage = useContext(ManageContext)
	return (
		<article
			className={styles.wrapper}
			onClick={!manage ? clickHandler : () => {}}
		>
			<div className={styles.img}>
				<Image src={getImageUrl(logoPath)} alt={nameOfBrand} fill />
			</div>
			<div className={styles.brand}>
				<CardTitle>{nameOfBrand}</CardTitle>
			</div>
			<div className={styles.company}>
				<h4>{nameOfCompany}</h4>
			</div>
			{manage && <Manage id={_id} />}
		</article>
	)
}
