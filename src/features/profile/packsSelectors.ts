import {RootState} from "../../app/store";


export const packsSelector = (state: RootState) => state.packs.packs.cardPacks
export const cardPacksTotalCountSelector = (state: RootState) => state.packs.packs.cardPacksTotalCount