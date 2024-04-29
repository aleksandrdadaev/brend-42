// 'use client'
import { FC } from 'react'

import Button from '@/shared/ui/button/Button'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

import { IShowMoreButton } from '../model/types/show-more-button.type'

import styles from './ShowMoreButton.module.scss'

export const ShowMoreButton: FC<IShowMoreButton> = ({
	clickHandler,
	isLoading,
	text,
}) => {
	return (
		<Button
			clickHandler={clickHandler}
			className={styles.button}
			disabled={isLoading}
		>
			{isLoading ? <MiniLoader /> : text}
		</Button>
	)
}
