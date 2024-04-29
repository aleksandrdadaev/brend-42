import { FC } from 'react'

import styles from './Footer.module.scss'
import FooterBottom from './footer-bottom/FooterBottom'
import FooterContent from './footer-content/FooterContent'
import FooterImg from './footer-img/FooterImg'

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<section className={styles.footerInner}>
				<FooterContent />
				<FooterBottom />
			</section>
			<FooterImg />
		</footer>
	)
}
