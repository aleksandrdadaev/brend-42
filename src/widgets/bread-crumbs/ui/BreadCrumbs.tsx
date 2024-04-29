'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC, ReactNode } from 'react'

import { getCrumbName } from '../lib/utils/get-crumb-name.util'

import styles from './BreadCrumbs.module.scss'

export const BreadCrumbs: FC<{ dynamicName?: string }> = ({ dynamicName }) => {
	const paths = usePathname()
	const pathNames = paths.split('/').filter(path => path)
	return (
		<section className={styles.wrapper}>
			<ul className={styles.ul}>
				<li className={styles.item}>
					<Link href='/'>Главная</Link>
				</li>
				{pathNames.length > 0 && <span> / </span>}
				{pathNames.map((link, index) => {
					let href = `/${pathNames.slice(0, index + 1).join('/')}`
					return (
						<React.Fragment key={index}>
							<li
								className={clsx(styles.item, {
									[styles.active]: paths === href,
								})}
							>
								<Link href={href}>{getCrumbName(link, dynamicName)}</Link>
							</li>
							{pathNames.length !== index + 1 && <span> / </span>}
						</React.Fragment>
					)
				})}
			</ul>
		</section>
	)
}
