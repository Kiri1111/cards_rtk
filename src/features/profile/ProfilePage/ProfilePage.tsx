import React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {Navigate} from "react-router-dom";
import s from './Profile.module.scss'

export const ProfilePage = () => {
	const userName = useAppSelector(state => state.auth.profile.name)
	const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

	if (!isLoggedIn) {
		return <Navigate to={'/login'}/>
	}

	return (

		<div className={s.profilePage}>
			<div className={s.profileWrapper}>
				<h2>Мой профиль:</h2>
				<div>Имя :{userName}</div>
			</div>
		</div>
	);
};

