// 'use client'
import { useCallback, useState } from 'react'

export const useOpenModalCard = <T>() => {
	const [modal, setModal] = useState<T | null>(null)
	const close = useCallback(() => setModal(null), [])

	return {
		modal,
		close,
		setModal,
	}
}
