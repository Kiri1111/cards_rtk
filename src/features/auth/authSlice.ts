import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "./authApi";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {appActions, appReducer} from "../../app/appSlice";

const register = createAppAsyncThunk<void, ArgRegisterType>('auth/register', async (arg) => {
	const res = await authApi.register(arg)
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>('auth/login', async (arg, thunkAPI) => {
	const {dispatch, rejectWithValue} = thunkAPI
	dispatch(appActions.setIsLoading({isLoading: true}))
	try {
		const res = await authApi.login(arg)
		dispatch(appActions.setIsLoggedIn({isLogged: true}))
		return {profile: res.data}
	} catch (e: any) {
		dispatch(appActions.setError(e.response.data.error))
		debugger
		return rejectWithValue(e.response.data.error)
	} finally {
		dispatch(appActions.setIsLoading({isLoading: false}))
	}
})

const logout = createAppAsyncThunk('auth/login', async (_, thunkAPI) => {
	const dispatch = thunkAPI.dispatch
	const res = await authApi.logout()
	dispatch(appActions.setIsLoggedIn({isLogged: false}))
})

const recoveryPassword = createAppAsyncThunk<void, { email: string }>('auth/recoveryPassword', async (arg, thunkAPI) => {
	const {dispatch, rejectWithValue} = thunkAPI
	dispatch(appActions.setIsLoading({isLoading: true}))
	try {
		const res = await authApi.recoveryPassword(arg.email)
	} catch (e: any) {
		dispatch(appActions.setError(e.response.data.error))
		return rejectWithValue(e.response.data.error)
	} finally {
		dispatch(appActions.setIsLoading({isLoading: false}))
	}
})
const setNewPassword = createAppAsyncThunk<void, { newPassword: string, resetPasswordToken: string }>('auth/setNewPassword', async (arg, thunkAPI) => {
	const {dispatch, rejectWithValue} = thunkAPI
	dispatch(appActions.setIsLoading({isLoading: true}))
	try {
		const res = await authApi.setNewPassword(arg.newPassword, arg.resetPasswordToken)
		dispatch(appActions.setIsLoggedIn({isLogged: true}))
	} catch (e: any) {
		dispatch(appActions.setError(e.response.data.error))
		return rejectWithValue(e.response.data.error)
	} finally {
		dispatch(appActions.setIsLoading({isLoading: false}))
	}
})

const slice = createSlice({
	name: 'auth',
	initialState: {
		profile: {} as ProfileType
	},
	reducers: {},
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
export const authThunks = {
	register, login, logout, recoveryPassword,
	setNewPassword
}
