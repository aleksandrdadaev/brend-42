import { AxiosResponse } from 'axios'

import { getContactsUrl } from '@/shared/config/api.config'
import {
	IContacts,
	IContactsForm,
	IContactsResponse,
} from '@/shared/model/types/contacts.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const ContactsService = {
	async get(): Promise<AxiosResponse<IContactsResponse>> {
		return axiosClassic.get<IContactsResponse>(getContactsUrl('/get'))
	},
	// async create(data: IContactsForm): Promise<AxiosResponse<IContactsResponse>> {
	// 	return $api.post<IContactsResponse>(getContactsUrl(`/create`), data)
	// },
	async edit(
		data: Omit<IContacts, '_id'>
	): Promise<AxiosResponse<IContactsResponse>> {
		return $api.put<IContactsResponse>(getContactsUrl(`/edit`), data)
	},
}
