import clsx from 'clsx'
import { FC } from 'react'

import burgerIcon from '@/shared/assets/icons/burger.svg'
import closeIcon from '@/shared/assets/icons/cross.svg'
import { useResize } from '@/shared/lib/hooks/useResize'
import ButtonIcon from '@/shared/ui/button-icon/ButtonIcon'
import Button from '@/shared/ui/button/Button'

import { IOpenButton } from '../../model/open-button.type'

import styles from './OpenButton.module.scss'

const OpenButton: FC<IOpenButton> = ({ setState, state }) => {
	const { isMobile } = useResize()
	return (
		<Button
			clickHandler={() => setState(prev => !prev)}
			className={clsx(styles.button, {
				[styles.open]: state,
			})}
		>
			{state ? (
				<ButtonIcon icon={closeIcon} />
			) : (
				<ButtonIcon icon={burgerIcon} />
			)}
			{isMobile ? '' : 'Меню'}
		</Button>
	)
}

export default OpenButton
