import * as React from 'react';
import {DataGrid, GridCallbackDetails, GridColDef, GridPaginationModel, GridValueGetterParams} from '@mui/x-data-grid';
import {CardsPackType} from "../packsApi";


type PropsType = {
	arrayToDraw: CardsPackType[]
	paginationModel: GridPaginationModel
	setPaginationModel: any
}

export function DataTable(props: PropsType) {


	const columns: GridColDef[] = [
		{field: 'title', headerName: 'Название', width: 160},
		{field: 'cardsCount', headerName: 'Количество карточек', width: 160},
		{field: 'lastUpdated', headerName: 'Обновлено', width: 190},
		{field: 'createdBy', headerName: 'Автор', width: 190},
		{field: 'actions', headerName: 'Действия', width: 160},
		// {
		// 	field: 'fullName',
		// 	headerName: 'Full name',
		// 	description: 'This column has a value getter and is not sortable.',
		// 	sortable: false,
		// 	width: 160,
		// 	valueGetter: (params: GridValueGetterParams) =>
		// 		`${params.row.firstName || ''} ${params.row.lastName || ''}`,
		// },
	];

	const rows = props.arrayToDraw.map(el => {
		return {
			id: el._id,
			title: el.name,
			cardsCount: el.cardsCount,
			lastUpdated: el.updated.slice(0, 10),
			createdBy: el.user_name
		}
	})

	return (
		<div style={{height: 650, width: '100%'}}>
			<DataGrid
				paginationModel={props.paginationModel}
				onPaginationModelChange={props.setPaginationModel}
				rows={rows}
				columns={columns}
				initialState={{
					// pagination: {
					// 	props.paginationModel,
					// },
				}}
				pageSizeOptions={[5, 10]}
			/>
		</div>
	);
}
