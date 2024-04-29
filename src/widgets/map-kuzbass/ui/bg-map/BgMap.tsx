import { FC } from 'react'

import styles from './BgMap.module.scss'

const BgMap: FC = () => {
	return (
		<div
			className={styles.wrapper}
			style={{
				backgroundImage: `url(/map.png)`,
			}}
		/>
	)
}

export default BgMap
