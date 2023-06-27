import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {packsThunks} from "../packsSlice";
import {cardPacksTotalCountSelector, packsSelector} from "../../profile/packsSelectors";
import {DataTable} from "./dataTable";
import {appIsLoadingSelector} from "../../../app/appSelectors";

export const PacksList = () => {

	const dispatch = useAppDispatch()
	const packsCount = useAppSelector(cardPacksTotalCountSelector)
	const packs = useAppSelector(packsSelector)
	const [paginationModel, setPaginationModel] = React.useState({
		pageSize: 5,
		page: 0,
	});

	useEffect(() => {
		dispatch(packsThunks.getPacks({page: paginationModel.page, pageSize: paginationModel.pageSize}))
	}, [])


	console.log(packs)
	if (!packs) {
		return <div>Loading packs</div>
	}

	return (
		<div>
			<h2>Общее количество карточек: {packsCount} шт.</h2>

			<DataTable arrayToDraw={packs} paginationModel={paginationModel} setPaginationModel={setPaginationModel}/>

		</div>
	);
};

