export interface IVote {
	text: string
	link: string
	votingId: number
	isEnabled: boolean
}

export interface IVoteResponse {
	data: IVote
	statusCode: number
}
