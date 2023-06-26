import React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {Navigate, NavLink} from "react-router-dom";
import s from './Profile.module.scss'
import {profileNameSelector} from "../../auth/authSelectors";
import {appIsLoggedInSelector} from "../../../app/appSelectors";

export const ProfilePage = () => {
	const userName = useAppSelector(profileNameSelector)
	const isLoggedIn = useAppSelector(appIsLoggedInSelector)

	if (!isLoggedIn) {
		return <Navigate to={'/login'}/>
	}

	return (
		<>
			<NavLink to={'/packsList'}>-Перейти к карточкам-</NavLink>
			<div className={s.profilePage}>
				<div className={s.profileWrapper}>
					<h2>Мой профиль:</h2>
					<div>Имя :{userName}</div>
				</div>
			</div>
		</>
	);
};

