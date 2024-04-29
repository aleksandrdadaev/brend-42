'use client'

import { SetStateAction, useEffect } from 'react'

import { useResize } from '@/shared/lib/hooks/useResize'

interface IChangePageSize {
	setPageSize: (value: SetStateAction<number>) => void
	setPageNumber: (value: SetStateAction<number>) => void
	desktop: number
	laptop: number
	tablet: number
	mobile: number
}

export const changePageSize = ({
	desktop,
	laptop,
	mobile,
	setPageNumber,
	setPageSize,
	tablet,
}: IChangePageSize) => {
	const { isDesktop, isLaptop, isMobile, isTablet, width } = useResize()
	useEffect(() => {
		isDesktop && setPageSize(desktop)
		isLaptop && setPageSize(laptop)
		isTablet && setPageSize(tablet)
		isMobile && setPageSize(mobile)
		setPageNumber(1)
	}, [width])
}
