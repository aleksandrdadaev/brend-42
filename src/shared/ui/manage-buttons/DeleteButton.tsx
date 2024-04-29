import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import crossIcon from '@/shared/assets/icons/cross.svg'

import styles from './ManageButton.module.scss'

const DeleteButton: FC<{
	clickHandler: (event: React.MouseEvent<HTMLElement>) => void
	disabled?: boolean
}> = ({ clickHandler, disabled }) => {
	return (
		<button
			className={clsx(styles.button, styles.delete)}
			onClick={clickHandler}
			disabled={disabled}
		>
			<Image src={crossIcon} alt='' fill />
		</button>
	)
}

export default DeleteButton
