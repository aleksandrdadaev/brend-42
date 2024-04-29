'use client'

import { FC, useEffect, useState } from 'react'
import { Element } from 'react-scroll'

import styles from './BitrixForm.module.scss'

export const BitrixForm: FC = () => {
	const [windowState, setWindowState] = useState<Window | null>(null)
	useEffect(() => {
		setWindowState(window)
	}, [])
	return (
		<section className={styles.wrapper}>
			<Element name='form'>
				<div className={styles.form}>
					{windowState === null ? (
						<></>
					) : (
						<script data-b24-form='inline/1645/8fp3p9' data-skip-moving='true'>
							{(function (w, d, u): any {
								var s = d.createElement('script')
								s.async = true
								s.src = u + '?' + ((Date.now() / 180000) | 0)
								var h = d.getElementsByTagName('script')[0]
								h.parentNode?.insertBefore(s, h)
							})(
								window,
								document,
								'https://cdn-ru.bitrix24.ru/b1086963/crm/form/loader_1645.js'
							)}
						</script>
					)}
				</div>
			</Element>
		</section>
	)
}
