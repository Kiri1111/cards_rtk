import {createSlice} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "./authApi";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {appActions} from "../../app/appSlice";
import {thunkTryCatch} from "../../common/utils/thunkTryCatch";
import {ArgChangeProfileAvatarType, ArgChangeProfileNameType, profileApi} from "../profile/profileApi";

const register = createAppAsyncThunk<void, ArgRegisterType>('auth/register', async (arg) => {
	const res = await authApi.register(arg)
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>('auth/login', async (arg, thunkAPI) => {
	const dispatch = thunkAPI.dispatch
	return thunkTryCatch(thunkAPI, async () => {
		const res = await authApi.login(arg)
		if (res.data) {
			dispatch(appActions.setIsLoggedIn({isLogged: true}))
		}
		return {profile: res.data}
	})
})

const logout = createAppAsyncThunk('auth/logout', async (_, thunkAPI) => {
	const dispatch = thunkAPI.dispatch
	const res = await authApi.logout()
	dispatch(authActions.deleteUserProfile())
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

const me = createAppAsyncThunk('auth/me', async (arg, thunkAPI) => {
	const dispatch = thunkAPI.dispatch
	return thunkTryCatch(thunkAPI, async () => {
		const res = await authApi.me()
		if (res.data) {
			dispatch(appActions.setIsLoggedIn({isLogged: true}))
		}
		return {profile: res.data}
	})
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

const changeProfileAvatar = createAppAsyncThunk<{ profile: { updatedUser: ProfileType } }, ArgChangeProfileAvatarType>('auth/changeProfileAvatar', async (arg, thunkAPI) => {
	return thunkTryCatch(thunkAPI, async () => {
		const res = await profileApi.changeProfileAvatar({avatar: arg.avatar})
		return {profile: res.data}
	})
})

const changeProfileName = createAppAsyncThunk<{ profile: { updatedUser: ProfileType } }, ArgChangeProfileNameType>('auth/changeProfileName', async (arg, thunkAPI) => {
	return thunkTryCatch(thunkAPI, async () => {
		const res = await profileApi.changeProfileName({name: arg.name})
		return {profile: res.data}
	})
})

const slice = createSlice({
	name: 'auth',
	initialState: {
		profile: {} as ProfileType
	},
	reducers: {
		deleteUserProfile: (state) => {
			state.profile = {} as ProfileType
		},
	},
	extraReducers: builder => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.profile = action.payload.profile
			})
			.addCase(me.fulfilled, (state, action) => {
				state.profile = action.payload.profile
			})
			.addCase(register.rejected, () => {
				console.log('warning, some mistake')
			})
			.addCase(changeProfileAvatar.fulfilled, (state, action) => {
				console.log(action.payload)
				state.profile.avatar = action.payload.profile.updatedUser.avatar
			})
			.addCase(changeProfileName.fulfilled, (state, action) => {
				state.profile.name = action.payload.profile.updatedUser.name
			})
	}
})

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = {
	register, login, changeProfileName, changeProfileAvatar, logout, recoveryPassword,
	setNewPassword, me
}
