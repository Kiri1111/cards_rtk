import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {packsThunks} from "../packsSlice";
import {cardPacksTotalCountSelector, packsSelector} from "../packsSelectors";
import {DataTable} from "./DataTable";
import {Modal} from "../../../common/ui/components/modalWindow/Modal";

export const PacksList = () => {

	const [viewModal, setViewModal] = useState(true)
	const dispatch = useAppDispatch()
	const packsCount = useAppSelector(cardPacksTotalCountSelector)
	const packs = useAppSelector(packsSelector)
	const [paginationModel, setPaginationModel] = React.useState({
		pageSize: 10,
		page: 0,
	});

	useEffect(() => {
		dispatch(packsThunks.getPacks({page: paginationModel.page, pageSize: paginationModel.pageSize}))
	}, [paginationModel])

	const openCreatePackModalHandler = () => setViewModal(true)


	if (!packs) {
		return <div>Загружаю колоды...</div>
	}

	return (
		<div>
			<h2>
				Общее количество карточек: {packsCount} шт.
				<span><button onClick={openCreatePackModalHandler}>Создать колоду</button></span>
			</h2>
			{viewModal && <Modal setView={setViewModal} title={'Новая колода'}>
                <div>Введите название:</div>
                <input/>
                <div>Создать колоду?</div>
                <span>
						<button>Создать</button>
						<button onClick={() => setViewModal(false)}>Отмена</button>
					</span>
            </Modal>}
			<DataTable arrayToDraw={packs} paginationModel={paginationModel}
					   setPaginationModel={setPaginationModel}/>
		</div>
	);
};

