'use client'

import { useScroll } from '@reactuses/core'
import { useEffect, useMemo, useRef, useState } from 'react'

import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { useResize } from '@/shared/lib/hooks/useResize'

export const useScrollHeader = () => {
	const elementRef = useRef<Window | null>(null)
	useEffect(() => {
		elementRef.current = window
	}, [])
	const [scrollState, setScrollState] = useState<'top' | 'bottom'>('top')
	const debouncedValue = useDebounce<'top' | 'bottom'>(scrollState, 250)
	const [x, y, isScrolling, arrivedState, directions] = useScroll(elementRef)
	const { left, right, top, bottom } = useMemo(
		() => arrivedState,
		[arrivedState]
	)

	const { isMobile } = useResize()

	const {
		left: toLeft,
		right: toRight,
		top: toTop,
		bottom: toBottom,
	} = useMemo(() => directions, [directions])

	useEffect(() => {
		if (!isMobile) {
			if (toTop) setScrollState('top')
			if (toBottom) setScrollState('bottom')
		}
	}, [toBottom, toTop, isScrolling, isMobile])

	return {
		top,
		left,
		right,
		bottom,
		toTop,
		scrollState,
		isScrolling,
		debouncedValue,
	}
}
