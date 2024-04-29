import { IContacts } from '@/shared/model/types/contacts.type'

export interface IGeneral extends Pick<IContacts, 'email' | 'whatsappLink'> {}
