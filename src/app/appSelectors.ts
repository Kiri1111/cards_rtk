import {RootState} from "./store";

export const appErrorSelector = (state: RootState) => state.app.error
export const appIsLoadingSelector = (state: RootState) => state.app.isLoading
export const appIsAppInitializedSelector = (state: RootState) => state.app.isAppInitialized
export const appIsLoggedInSelector = (state: RootState) => state.app.isLoggedIn