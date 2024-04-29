import { ChangeEvent, FC } from 'react'

import searchLogo from '@/shared/assets/icons/search.svg'
import ButtonIcon from '@/shared/ui/button-icon/ButtonIcon'
import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

import styles from './SearchParticipants.module.scss'

export const SearchParticipants: FC<{
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void
	isLoading: boolean
}> = ({ handleChange, isLoading }) => {
	return (
		<div className={styles.wrapper}>
			<input
				type='search'
				className={styles.input}
				placeholder='Название компании'
				onChange={handleChange}
			/>
			<span className={styles.icon}>
				{isLoading ? <MiniLoader /> : <ButtonIcon icon={searchLogo} />}
			</span>
		</div>
	)
}
