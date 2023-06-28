import {instance} from "../../common/api/commonApi";
import {AxiosResponse} from "axios";

export const packsApi = {
	getPacks(arg: ArgGetPacksType) {
		return instance.get<AxiosResponse<PacksType>>(`cards/pack?page=${arg.page}&pageCount=${arg.pageSize}`)
	}
}


export type PacksType = {
	cardPacks: CardsPackType[]
	cardPacksTotalCount: number
	maxCardsCount: number
	minCardsCount: number
	page: number
	pageCount: number
}

export type CardsPackType = {
	_id: string
	user_id: string
	user_name: string
	name: string
	cardsCount: number
	created: string
	updated: string
}

export type ArgGetPacksType = {
	pageSize: number
	page: number
}