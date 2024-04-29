import Image from 'next/image'
import { FC } from 'react'

import { getImageUrl } from '@/shared/config/api.config'

import styles from './Photo.module.scss'

const Photo: FC<{ caption: string; path: string }> = ({ caption, path }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.img}>
				<Image src={getImageUrl(path)} alt={caption} fill />
			</div>
			<span className={styles.caption}>{caption}</span>
		</div>
	)
}

export default Photo
