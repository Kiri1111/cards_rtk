import React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {Navigate} from "react-router-dom";

export const ProfilePage = () => {
	const userName = useAppSelector(state => state.auth.profile.name)
	const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

	if (!isLoggedIn) {
		return <Navigate to={'/login'}/>
	}

	return (

		<div>
			<h2>Мой профиль:</h2>
			<div>Имя :{userName}</div>
		</div>
	);
};

