import Image from 'next/image'
import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'
import { IParticipant } from '@/shared/model/types/participant.type'

import styles from './Participant.module.scss'

const Participant: FC<{
	participant: IParticipant
	clickHandler?: (event: React.MouseEvent<HTMLElement>) => void
}> = ({ participant, clickHandler }) => {
	return (
		<article className={styles.card} onClick={clickHandler}>
			<div className={styles.header}>
				<div className={styles.img}>
					<Image
						src={getImageUrl(participant.logoPath)}
						alt={participant.nameOfBrand}
						fill
					/>
				</div>
				<h3 className={styles.title}>{participant.nameOfBrand}</h3>
			</div>
			<span className={styles.company}>{participant.nameOfCompany}</span>
		</article>
	)
}

export default Participant
