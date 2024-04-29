export interface IPaginationProps<T> {
	elements: T[] | undefined
	isSuccess: boolean
	totalElements: number | undefined
	pageSize: number
	pageNumber: number
}
