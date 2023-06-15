import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const appInitialState = {
	error: null as null | string,
	isLoading: false,
	isAppInitialized: false,
	isLoggedIn: false
}

const slice = createSlice({
	name: 'app',
	initialState: appInitialState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading
		},
		setIsLoggedIn: (state, action: PayloadAction<{ value: boolean }>) => {
			state.isLoggedIn = action.payload.value
		}
	}
})

export const appReducer = slice.reducer
export const appActions = slice.actions