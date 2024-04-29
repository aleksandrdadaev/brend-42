'use client'

import { useEffect, useState } from 'react'

import {
	DESKTOP,
	LAPTOP,
	MOBILE,
	TABLET,
} from '@/shared/config/breakpoints.config'

export const useResize = () => {
	const [width, setWidth] = useState<number>(0)

	useEffect(() => {
		setWidth(window.innerWidth)
		const handleResize = (event: Event) => {
			const target = event.target as Window
			setWidth(target.innerWidth)
		}
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return {
		width,
		isDesktop: width >= DESKTOP,
		isLaptop: width >= LAPTOP && width < DESKTOP,
		isTablet: width >= TABLET && width < LAPTOP,
		isMobile: width >= MOBILE && width < TABLET,
	}
}
