import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "./authApi";
import {AppDispatch, RootState} from "../../app/store";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";

const register = createAppAsyncThunk<void, ArgRegisterType>('auth/register', async (arg) => {
	const res = await authApi.register(arg)
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>('auth/login', async (arg) => {
	const res = await authApi.login(arg)
	return {profile: res.data}
})

const slice = createSlice({
	name: 'auth',
	initialState: {
		profile: null as ProfileType | null
	},
	reducers: {
		// setProfile(state, action: PayloadAction<{ profile: ProfileType }>) {
		// 	state.profile = action.payload.profile
		// },

	},
	extraReducers: builder => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.profile = action.payload.profile
			})
			.addCase(register.rejected, (state, action) => {
				console.log('warning, some mistake')
			})
	}
})

export const authReducer = slice.reducer
// export const authActions = slice.actions
export const authThunks = {register, login}
