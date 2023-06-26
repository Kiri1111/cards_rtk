import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {packsThunks} from "../packsSlice";
import {cardPacksTotalCountSelector} from "../../profile/packsSelectors";

export const PacksList = () => {

	const dispatch = useAppDispatch()
	const packsCount = useAppSelector(cardPacksTotalCountSelector)

	useEffect(() => {
		dispatch(packsThunks.getPacks())
	}, [])
	return (
		<div>
			<h2>Общее количество карточек: {packsCount} шт.</h2>
		</div>
	);
};

