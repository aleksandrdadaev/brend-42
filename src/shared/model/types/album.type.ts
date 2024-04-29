export interface IAlbum {
	_id: string
	name: string
	photosPath: string[]
}

export interface IAlbumNameForm extends Omit<IAlbum, '_id' | 'photosPath'> {}

export interface IAlbumPhotosForm {
	photos: FileList
}

export interface IAlbumForm extends IAlbumNameForm, IAlbumPhotosForm {}

export interface IAlbumsResponse {
	data: {
		albums: IAlbum[]
		totalAlbums: number
	}
	statusCode: number
}

export interface IAlbumResponse {
	data: IAlbum
	statusCode: number
}
