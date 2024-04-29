'use client'

import { AnimatePresence } from 'framer-motion'
import { FC, useRef, useState } from 'react'

import { useGetContacts } from '@/features/get-contacts'

import { HeaderNav } from '@/entities/header-nav'

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside'

import OpenButton from './open-button/OpenButton'

export const OpenNav: FC = () => {
	const [open, setOpen] = useState<boolean>(false)
	const ref = useClickOutside({
		callback: () => setOpen(false),
	})

	return (
		<div>
			<OpenButton state={open} setState={setOpen} />
			<AnimatePresence>{open && <HeaderNav ref={ref} />}</AnimatePresence>
		</div>
	)
}
