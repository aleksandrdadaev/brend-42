export const API_URL = `${process.env.APP_URL}/api`

export const getImageUrl = (string: string) => `/uploads/${string}`

export const getCompetitionUrl = (string: string) => `/about${string}`

export const getPrivacyUrl = (string: string) => `/privacy${string}`

export const getAgreementUrl = (string: string) => `/agreement${string}`

export const getContactsUrl = (string: string) => `/contacts${string}`

export const getParticipantUrl = (string: string) => `/participant${string}`

export const getAlbumUrl = (string: string) => `/album${string}`

export const getVideoUrl = (string: string) => `/video${string}`

export const getPartnerUrl = (string: string) => `/partner${string}`

export const getWinnerUrl = (string: string) => `/winner${string}`

export const getEventUrl = (string: string) => `/event${string}`

export const getNewsUrl = (string: string) => `/news${string}`

export const getVoteUrl = (string: string) => `/vote${string}`

export const getCoverUrl = (string: string) => `/cover${string}`

export const getDistrictUrl = (string: string) => `/district${string}`

export const getAuthUrl = (string: string) => `/auth${string}`

export const getDisposalUrl = (string: string) => `/disposal${string}`

export const getClauseUrl = (string: string) => `/clause${string}`

export const getCommissionUrl = (string: string) => `/commission${string}`

export const getApplicationUrl = (string: string) => `/application${string}`

export const getFooterUrl = (string: string) => `/footer${string}`

export const multipart: string = 'multipart/form-data'
