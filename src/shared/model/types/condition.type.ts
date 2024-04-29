export interface ICondition {
	_id: string
	text: string
}

export interface IConditionForm extends Omit<ICondition, '_id'> {}

export interface IConditionResponse {
	data: ICondition
	statusCode: number
}
