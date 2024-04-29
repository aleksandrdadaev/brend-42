import { FC, PropsWithChildren } from 'react'

import InterceptorProvider from './InterceptorProvider'
import QueryProvider from './QueryProvider'
import StoreProvider from './StoreProvider'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryProvider>
			<StoreProvider>
				<InterceptorProvider>{children}</InterceptorProvider>
			</StoreProvider>
		</QueryProvider>
	)
}

export default MainProvider
