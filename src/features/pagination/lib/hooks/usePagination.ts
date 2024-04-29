import { useEffect, useState } from 'react'

import { IPaginationProps } from '../../model/types/pagination-props.type'

export const usePagination = <T>({
	isSuccess,
	pageNumber,
	pageSize,
	elements,
	totalElements,
}: IPaginationProps<T>) => {
	const [showMore, setShowMore] = useState<boolean>(true)
	const [list, setList] = useState<T[]>([])

	useEffect(() => {
		if (isSuccess) {
			pageNumber === 1
				? setList(elements || [])
				: setList(prev => prev.concat(elements || []))
			if ((totalElements || 0) <= pageNumber * pageSize) {
				setShowMore(false)
			} else setShowMore(true)
		}
	}, [isSuccess, pageSize, pageNumber])

	return {
		list,
		showMore,
	}
}
