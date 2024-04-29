import { AnimatePresence, motion } from 'framer-motion'
import { FC, forwardRef } from 'react'

import closeIcon from '@/shared/assets/icons/cross.svg'
import { IParticipant } from '@/shared/model/types/participant.type'
import ButtonIcon from '@/shared/ui/button-icon/ButtonIcon'

import { cardVariants } from '../lib/animation/card-animation'

import styles from './ModalCard.module.scss'
import CardBody from './card-body/CardBody'
import CardHeader from './card-header/CardHeader'

export const ModalCard = forwardRef<
	HTMLElement,
	{
		member: IParticipant
		close: (event: React.MouseEvent<HTMLElement>) => void
	}
>(
	(
		{
			close,
			member: { address, description, logoPath, nameOfBrand, nameOfCompany },
		},
		forwardRef: any
	) => {
		return (
			<div className={styles.modal}>
				<motion.div
					className={styles.card}
					ref={forwardRef}
					variants={cardVariants}
					initial='hidden'
					animate='show'
					exit='hidden'
				>
					<button className={styles.close} onClick={close}>
						<ButtonIcon icon={closeIcon} />
					</button>
					<CardHeader logoPath={logoPath} nameOfBrand={nameOfBrand} />
					<CardBody
						description={description}
						nameOfCompany={nameOfCompany}
						address={address}
					/>
				</motion.div>
			</div>
		)
	}
)
