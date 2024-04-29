import { IParticipant } from '@/shared/model/types/participant.type'

export type TypeCardHeader = Pick<IParticipant, 'logoPath' | 'nameOfBrand'>

export type TypeCardBody = Pick<
	IParticipant,
	'nameOfCompany' | 'description' | 'address'
>
