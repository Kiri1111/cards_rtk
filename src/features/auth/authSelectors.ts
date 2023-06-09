import {RootState} from "../../app/store";

export const profileNameSelector = (state: RootState) => state.auth.profile.name
export const profileAvatarSelector = (state: RootState) => state.auth.profile.avatar
export const profileCardsCountSelector = (state: RootState) => state.auth.profile.publicCardPacksCount