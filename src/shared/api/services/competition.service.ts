import { AxiosResponse } from 'axios'

import { getCompetitionUrl, multipart } from '@/shared/config/api.config'
import { IContestResponse } from '@/shared/model/types/info-competition.type'
import { IContest } from '@/shared/model/types/info-competition.type'
import {
	IOrganizerResponse,
	IOrganizersResponse,
} from '@/shared/model/types/organizer.type'
import { IPurpose, IPurposeResponse } from '@/shared/model/types/purpose.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const CompetitionService = {
	async getContest(): Promise<AxiosResponse<IContestResponse>> {
		return axiosClassic.get<IContestResponse>(getCompetitionUrl(`/getContest`))
	},
	async editContest(data: IContest): Promise<AxiosResponse<IContestResponse>> {
		return $api.put<IContestResponse>(getCompetitionUrl(`/editContest`), data)
	},

	async getAllOrganizers(): Promise<AxiosResponse<IOrganizersResponse>> {
		return axiosClassic.get<IOrganizersResponse>(
			getCompetitionUrl(`/getAllOrganizers`)
		)
	},
	async getOrganizerById(
		id: string
	): Promise<AxiosResponse<IOrganizerResponse>> {
		return axiosClassic.get<IOrganizerResponse>(
			getCompetitionUrl(`/getOrganizer/${id}`)
		)
	},
	async createOrganizer(
		data: FormData
	): Promise<AxiosResponse<IOrganizerResponse>> {
		return $api.post<IOrganizerResponse>(
			getCompetitionUrl(`/createOrganizer`),
			data,
			{
				headers: {
					'Content-Type': multipart,
				},
			}
		)
	},
	async editOrganizer(
		data: FormData,
		id: string
	): Promise<AxiosResponse<IOrganizerResponse>> {
		return $api.put<IOrganizerResponse>(
			getCompetitionUrl(`/editOrganizer/${id}`),
			data,
			{
				headers: {
					'Content-Type': multipart,
				},
			}
		)
	},
	async deleteOrganizer(id: string): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getCompetitionUrl(`/deleteOrganizer/${id}`))
	},
	async deleteAllOrganizers(): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getCompetitionUrl(`/deleteAllOrganizers`))
	},

	async getPurpose(): Promise<AxiosResponse<IPurposeResponse>> {
		return axiosClassic.get<IPurposeResponse>(getCompetitionUrl(`/getPurpose`))
	},
	async createPurpose(
		data: IPurpose
	): Promise<AxiosResponse<IPurposeResponse>> {
		return $api.post<IPurposeResponse>(
			getCompetitionUrl(`/createPurpose`),
			data
		)
	},
	async editPurpose(data: IPurpose): Promise<AxiosResponse<IPurposeResponse>> {
		return $api.put<IPurposeResponse>(getCompetitionUrl(`/editPurpose`), data)
	},
}
