import Script from 'next/script'
import { FC } from 'react'

const GoogleAnalytics: FC = () => {
	return (
		<>
			<Script
				async
				src={`https://www.googletagmanager.com/gtag/js? 
		id=${process.env.GOOGLE_ANALYTICS}`}
			></Script>
			<Script
				id='google-analytics'
				dangerouslySetInnerHTML={{
					__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', '${process.env.GOOGLE_ANALYTICS}');
			`,
				}}
			></Script>
		</>
	)
}

export default GoogleAnalytics
