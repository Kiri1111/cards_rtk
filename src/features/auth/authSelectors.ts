import {RootState} from "../../app/store";

export const profileNameSelector = (state: RootState) => state.auth.profile.name