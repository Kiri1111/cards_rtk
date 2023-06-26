import {createSlice} from "@reduxjs/toolkit";
import {packsApi, PacksType} from "./packsApi";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "../../common/utils/thunkTryCatch";

const getPacks = createAppAsyncThunk('packs/getPacks', async (arg, thunkAPI) => {
	return thunkTryCatch(thunkAPI, async () => {
		const res = await packsApi.getPacks()
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