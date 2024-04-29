import { FC } from 'react'

import { AboutCompetitionBlock } from '@/widgets/about-competition'
import { BitrixForm } from '@/widgets/bitrix-form'
import { HowToAccept } from '@/widgets/how-to-accept'
import { LastMembers } from '@/widgets/last-members'
import { MainSection } from '@/widgets/main-section'
import { MapKuzbass } from '@/widgets/map-kuzbass'
import { Nominations } from '@/widgets/nominations'
import { PhotoAndVideo } from '@/widgets/photo-and-video'
import { PurposeCompetition } from '@/widgets/purpose-competition'

import styles from './Main.module.scss'

export const Main: FC = () => {
	return (
		<main className={styles.main}>
			<MainSection />
			<AboutCompetitionBlock />
			<PurposeCompetition />
			<Nominations />
			<MapKuzbass />
			<LastMembers />
			<HowToAccept />
			<PhotoAndVideo />
			<BitrixForm />
		</main>
	)
}
