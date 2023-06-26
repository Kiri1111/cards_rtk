import React, {useEffect} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {packsThunks} from "./packsSlice";

export const PacksList = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(packsThunks.getPacks())
	}, [])
	return (
		<div>

		</div>
	);
};

