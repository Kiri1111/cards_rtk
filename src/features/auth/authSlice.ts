import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "./authApi";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";

const register = createAppAsyncThunk<void, ArgRegisterType>('auth/register', async (arg) => {
	const res = await authApi.register(arg)
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>('auth/login', async (arg, thunkAPI) => {
	const res = await authApi.login(arg)
	// thunkAPI.dispatch(authActions.setProfile({profile: res.data}))
	return {profile: res.data}
})

const logout = createAppAsyncThunk('auth/login', async () => {
	const res = await authApi.logout()
	console.log(res.data)
})


const slice = createSlice({
	name: 'auth',
	initialState: {
		profile: {} as ProfileType
	},
	reducers: {
		setProfile(state, action: PayloadAction<{ profile: ProfileType }>) {
			state.profile = action.payload.profile
		},

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
export const authActions = slice.actions
export const authThunks = {register, login, logout}
