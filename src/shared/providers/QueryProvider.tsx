'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { FC, PropsWithChildren } from 'react'

import { queryClient } from '../config/query-client.config'

declare module '@tanstack/react-query' {
	interface Register {
		defaultError: AxiosError<{ message: string }>
	}
}

const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default QueryProvider
