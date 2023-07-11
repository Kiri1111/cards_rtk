import * as React from 'react';
import {DataGrid, GridColDef, GridPaginationModel} from '@mui/x-data-grid';
import {CardsPackType} from "../packsApi";

type PropsType = {
	arrayToDraw: CardsPackType[]
	paginationModel: GridPaginationModel
	setPaginationModel: any
}

export function DataTable(props: PropsType) {


	const columns: GridColDef[] = [
		{field: 'title', headerName: 'Название', width: 160, disableColumnMenu: true},
		{field: 'cardsCount', headerName: 'Количество карточек', width: 160, disableColumnMenu: true},
		{field: 'lastUpdated', headerName: 'Обновлено', width: 190, disableColumnMenu: true},
		{field: 'createdBy', headerName: 'Автор', width: 190, disableColumnMenu: true},
	];


	const rows = props.arrayToDraw.map(el => {
		return {
			id: el._id,
			title: el.name,
			cardsCount: el.cardsCount,
			lastUpdated: el.updated.slice(0, 10),
			createdBy: el.user_name,
		}
	})


	return (
		<div style={{height: 650, width: '100%'}}>
			<DataGrid

				paginationModel={props.paginationModel}
				onPaginationModelChange={props.setPaginationModel}
				rows={rows}
				onRowClick={() => alert('hi')}
				columns={columns}
				initialState={{}}
				pageSizeOptions={[5, 10, 15]}
			/>
		</div>
	);
}
