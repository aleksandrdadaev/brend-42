import { FC, PropsWithChildren } from 'react'

import MiniLoader from '@/shared/ui/mini-loader/MiniLoader'

export const SubmitButton: FC<PropsWithChildren<{ isPending: boolean }>> = ({
	isPending,
	children,
}) => {
	return (
		<button type='submit' className={'button'} disabled={isPending}>
			{isPending ? <MiniLoader /> : children}
		</button>
	)
}
