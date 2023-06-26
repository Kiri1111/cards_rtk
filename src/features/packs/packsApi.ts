import {instance} from "../../common/api/commonApi";

export const packsApi = {
	getPacks() {
		return instance.get<PacksType>('cards/pack')
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

type CardsPackType = {
	_id: string
	user_id: string
	name: string
	cardsCount: number
	created: string
	updated: string
}