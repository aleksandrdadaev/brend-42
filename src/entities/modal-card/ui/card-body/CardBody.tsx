import { FC } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'

import { useResize } from '@/shared/lib/hooks/useResize'

import { TypeCardBody } from '../../model/modal-card.type'

import styles from './CardBody.module.scss'

const CardBody: FC<TypeCardBody> = ({
	description,
	nameOfCompany,
	address,
}) => {
	const { isDesktop, isLaptop, isMobile, isTablet } = useResize()
	return (
		<div className={styles.body}>
			<h3>{nameOfCompany}</h3>
			<address>{address}</address>

			<Scrollbars
				className={styles.description}
				universal
				autoHeight
				autoHeightMax={isDesktop || isLaptop ? 500 : 150}
				renderTrackVertical={props => <div className={styles.track} />}
			>
				<p>{description}</p>
			</Scrollbars>
		</div>
	)
}

export default CardBody
