export interface IContest {
	title: string
	year: number
	participants: number
	trademarks: number
	experts: number
}

export interface IContestResponse {
	data: IContest
	statusCode: number
}
