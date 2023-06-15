import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {appReducer} from "./appSlice";
import {authReducer} from "../features/auth/authSlice";

export const store = configureStore({
	reducer: {
		app: appReducer,
		auth: authReducer
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
	RootState,
	unknown,
	Action<string>>;


// @ts-ignore
window.store = store;
