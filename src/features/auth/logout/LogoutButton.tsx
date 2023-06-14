import React from 'react';
import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../authSlice";

export const LogoutButton = () => {

	const dispatch = useAppDispatch()

	const logoutHandler = () => dispatch(authThunks.logout())
	return (
		<div>
			<button onClick={logoutHandler}>Выйти</button>
		</div>
	);
};

