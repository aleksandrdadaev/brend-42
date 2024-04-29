export const createPageSize = (pageSize: number | undefined): string => {
	return pageSize ? `&pageSize=${pageSize}` : ''
}

export const createPageNumber = (pageNumber: number | undefined): string => {
	return pageNumber ? `&pageNumber=${pageNumber}` : ''
}

export const createSort = (sort: boolean | undefined): string => {
	return sort ? `&sort=true` : ''
}

export const createSlug = (slug: string | undefined): string => {
	return slug ? `&slug=${slug}` : ''
}

export const createId = (id: string | undefined): string => {
	return id ? `&id=${id}` : ''
}

export const createNameOfCompany = (name: string | undefined): string => {
	return name ? `&nameOfCompany=${name}` : ''
}

export const createDistrict = (district: string[] | undefined): string => {
	let districts: string = ''
	district?.map(id => (districts += `&district=${id}`))
	return district && district?.length > 0 ? districts : ''
}
