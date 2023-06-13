import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "./authApi";

const register = createAsyncThunk('auth/register', (arg: ArgRegisterType, thunkAPI) => {
	const {dispatch, getState, rejectWithValue} = thunkAPI
	authApi.register(arg).then((res) => {
		console.log(res)
	})
})

const login = createAsyncThunk('auth/login', (arg: ArgLoginType, thunkAPI) => {
	const {dispatch, getState, rejectWithValue} = thunkAPI
	authApi.login(arg).then((res) => dispatch(authActions.setProfile({profile: res.data})))
})

const slice = createSlice({
	name: 'auth',
	initialState: {
		profile: null as ProfileType | null
	},
	reducers: {
		setProfile(state, action: PayloadAction<{ profile: ProfileType }>) {
			state.profile = action.payload.profile
		}
	}
})

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = {register, login}
