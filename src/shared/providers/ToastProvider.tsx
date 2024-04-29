'use client'

import { FC, PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			{children}
			<ToastContainer />
		</>
	)
}

export default ToastProvider
