import { AxiosResponse } from 'axios'

import { getAlbumUrl, multipart } from '@/shared/config/api.config'
import {
	createPageNumber,
	createPageSize,
} from '@/shared/lib/utils/create-query-param.util'
import {
	IAlbumNameForm,
	IAlbumResponse,
	IAlbumsResponse,
} from '@/shared/model/types/album.type'

import { $api, axiosClassic } from '../instance-axios.api'

export const AlbumService = {
	async getAll(
		pageSize?: number,
		pageNumber?: number
	): Promise<AxiosResponse<IAlbumsResponse>> {
		return axiosClassic.get<IAlbumsResponse>(
			getAlbumUrl(
				`/getAll?${createPageSize(pageSize)}${createPageNumber(pageNumber)}`
			)
		)
	},
	async getById(id: string): Promise<AxiosResponse<IAlbumResponse>> {
		return axiosClassic.get<IAlbumResponse>(getAlbumUrl(`/get/${id}`))
	},
	async create(data: FormData): Promise<AxiosResponse<IAlbumResponse>> {
		return $api.post<IAlbumResponse>(getAlbumUrl(`/create`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
	async addPhotos(
		data: FormData,
		id: string
	): Promise<AxiosResponse<IAlbumResponse>> {
		return $api.post<IAlbumResponse>(getAlbumUrl(`/addPhotos/${id}`), data, {
			headers: {
				'Content-Type': multipart,
			},
		})
	},
	async editName(
		data: IAlbumNameForm,
		id: string
	): Promise<AxiosResponse<IAlbumResponse>> {
		return $api.put<IAlbumResponse>(getAlbumUrl(`/edit/name/${id}`), data)
	},
	async deletePhoto(
		id: string,
		index: number
	): Promise<AxiosResponse<IAlbumResponse>> {
		return $api.delete<IAlbumResponse>(
			getAlbumUrl(`/delete/photo/${id}/${index}`)
		)
	},
	async deleteById(id: string): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getAlbumUrl(`/delete/${id}`))
	},
	async deleteAll(): Promise<AxiosResponse<any>> {
		return $api.delete<any>(getAlbumUrl(`/deleteAll`))
	},
}
