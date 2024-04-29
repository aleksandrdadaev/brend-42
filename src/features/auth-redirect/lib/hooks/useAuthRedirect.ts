'use client'

import { redirect } from 'next/navigation'

import { getManageUrl } from '@/shared/config/url.config'
import { useAppSelector } from '@/shared/model/store/store-hooks'

export const useAuthRedirect = (auth: boolean) => {
	const isAuth = useAppSelector(state => state.auth.isAuth)

	if (auth) {
		if (!isAuth) {
			redirect('/auth/signin')
		} else return
	} else {
		if (isAuth) redirect(getManageUrl(''))
		else return
	}
}
