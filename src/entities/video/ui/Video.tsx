'use client'

import { FC, useContext } from 'react'

import { ManageContext } from '@/shared/lib/utils/context.util'
import { IVideo } from '@/shared/model/types/video.type'

import styles from './Video.module.scss'
import Manage from './manage/Manage'

export const Video: FC<{ video: IVideo }> = ({
	video: { _id, videoCaption, videoLink },
}) => {
	const manage = useContext(ManageContext)
	return (
		<article className={styles.wrapper}>
			<div className={styles.video}>
				<iframe
					src={videoLink}
					title={videoCaption}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture;  web-share'
					width='100%'
					height='100%'
					allowFullScreen
				></iframe>
			</div>
			<span className={styles.caption}>{videoCaption}</span>
			{manage && <Manage id={_id} />}
		</article>
	)
}
