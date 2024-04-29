import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'

import styles from './List.module.scss'
import ListItem from './list-item/ListItem'

const List: FC<{ photos: string[] }> = ({ photos }) => {
	return (
		<div className={styles.list}>
			{photos?.map((photo, index) => (
				<ListItem photo={getImageUrl(photo)} index={index} key={index} />
			))}
		</div>
	)
}

export default List
