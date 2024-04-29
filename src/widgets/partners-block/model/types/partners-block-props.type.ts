import { IPartner } from '@/shared/model/types/partner.type'

export interface IPartnersBlockProps {
	partners: IPartner[] | undefined
	isSuccess: boolean
}
