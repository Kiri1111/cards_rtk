import {createSlice} from "@reduxjs/toolkit";
import {ArgAddPackType, ArgGetPacksType, packsApi, PacksType} from "./packsApi";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "../../common/utils/thunkTryCatch";

const getPacks = createAppAsyncThunk<{ packs: PacksType }, ArgGetPacksType>('packs/getPacks', async (arg, thunkAPI) => {
	return thunkTryCatch(thunkAPI, async () => {
		const res = await packsApi.getPacks({page: arg.page, pageSize: arg.pageSize})
		return {packs: res.data}
	})
})

const addPacks = createAppAsyncThunk<void, ArgAddPackType>('packs/addPacks', async (arg, thunkAPI) => {
	const dispatch = thunkAPI.dispatch
	return thunkTryCatch(thunkAPI, async () => {
		const res = await packsApi.addPack({name: arg.name, deckCover: arg.deckCover})
		dispatch(getPacks({page: 0, pageSize: 50}))
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
export const packsThunks = {getPacks, addPacks}