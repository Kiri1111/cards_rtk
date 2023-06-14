import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "./authApi";

const register = createAsyncThunk('auth/register', async (arg: ArgRegisterType) => {
	const res = await authApi.register(arg)
})

// const login = createAsyncThunk('auth/login',  (arg: ArgLoginType, thunkAPI) => {
// 	const {dispatch, getState, rejectWithValue} = thunkAPI
// 	return authApi.login(arg).then((res) => {
// 		return {profile: res.data}
// 	})
// })
const login = createAsyncThunk('auth/login', async (arg: ArgLoginType) => {
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
