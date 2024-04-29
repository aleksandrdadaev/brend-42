'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { useDeleteNomination } from '@/features/delete-nomination'

import { ManageButtons } from '@/entities/manage-buttons'

import { getManageUrl } from '@/shared/config/url.config'
import DeleteButton from '@/shared/ui/manage-buttons/DeleteButton'
import EditButton from '@/shared/ui/manage-buttons/EditButton'

const Manage: FC<{ id: string }> = ({ id }) => {
	const { push } = useRouter()
	const { isPending, mutate } = useDeleteNomination()
	return (
		<ManageButtons>
			<EditButton
				clickHandler={() => push(getManageUrl(`/nominations/edit/${id}`))}
				disabled={isPending}
			/>
			<DeleteButton clickHandler={() => mutate(id)} disabled={isPending} />
		</ManageButtons>
	)
}

export default Manage
