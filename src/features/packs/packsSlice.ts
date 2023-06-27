import {createSlice} from "@reduxjs/toolkit";
import {ArgGetPacksType, packsApi, PacksType} from "./packsApi";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "../../common/utils/thunkTryCatch";
import {ArgLoginType, ProfileType} from "../auth/authApi";

const getPacks = createAppAsyncThunk<{ packs: PacksType }, ArgGetPacksType>('packs/getPacks', async (arg, thunkAPI) => {
	return thunkTryCatch(thunkAPI, async () => {
		const res = await packsApi.getPacks(arg)
		return {packs: res.data}
	})
})


const slice = createSlice({
	name: 'packs',
	initialState: {
		packs: {} as PacksType
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getPacks.fulfilled, (state, action) => {
				state.packs = action.payload.packs
			})
	}
})

export const packsReducer = slice.reducer
export const packsThunks = {getPacks}