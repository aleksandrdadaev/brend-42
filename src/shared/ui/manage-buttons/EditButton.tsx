import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import editIcon from '@/shared/assets/icons/edit.svg'

import styles from './ManageButton.module.scss'

const EditButton: FC<{
	clickHandler: (event: React.MouseEvent<HTMLElement>) => void
	disabled?: boolean
}> = ({ clickHandler, disabled }) => {
	return (
		<button
			className={clsx(styles.button, styles.edit)}
			onClick={clickHandler}
			disabled={disabled}
		>
			<Image src={editIcon} alt='' fill />
		</button>
	)
}

export default EditButton
