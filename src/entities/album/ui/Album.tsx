'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useContext } from 'react'
import { useLockedBody } from 'usehooks-ts'

import { useOpenModalCard } from '@/features/open-modal-card'

import noImage from '@/shared/assets/icons/no-image.svg'
import { getImageUrl } from '@/shared/config/api.config'
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside'
import { ManageContext } from '@/shared/lib/utils/context.util'
import { IAlbum } from '@/shared/model/types/album.type'

import styles from './Album.module.scss'
import { albumVariants } from './album-animation'
import Manage from './manage/Manage'
import AlbumModal from './modal/AlbumModal'

export const Album: FC<{ album: IAlbum }> = ({
	album: { name, _id, photosPath },
}) => {
	const { close, modal, setModal } = useOpenModalCard<boolean>()
	const [locked, setLocked] = useLockedBody(false)
	const ref = useClickOutside({
		callback: () => {
			close(), setLocked(false)
		},
		contains: true,
	})
	const manage = useContext(ManageContext)

	return (
		<>
			<motion.article
				className={styles.wrapper}
				onClick={() => {
					if (photosPath.length > 0) {
						setModal(true)
						setLocked(true)
					}
				}}
				variants={albumVariants}
				initial='hidden'
				animate='show'
				whileHover={'hover'}
			>
				<div className={styles.img}>
					{photosPath.length > 0 ? (
						<Image src={getImageUrl(photosPath[0])} alt='' fill />
					) : (
						<Image
							src={noImage}
							alt=''
							width={150}
							height={150}
							className={styles.noImage}
						/>
					)}
				</div>
				<h3 className={styles.title}>{name}</h3>
				{manage && <Manage id={_id} />}
			</motion.article>
			<AnimatePresence>
				{!manage && modal && (
					<AlbumModal
						ref={ref}
						images={photosPath}
						close={() => {
							close()
							setLocked(false)
						}}
					/>
				)}
			</AnimatePresence>
		</>
	)
}
