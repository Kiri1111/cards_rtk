import React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {Navigate, NavLink} from "react-router-dom";
import s from './Profile.module.scss'
import {profileAvatarSelector, profileNameSelector} from "../../auth/authSelectors";
import {appIsLoggedInSelector} from "../../../app/appSelectors";
import ava from '../../../common/ui/images/avatar.webp'
import {InputTypeFile} from "../../../common/ui/components/inputFile";

export const ProfilePage = () => {
	const userName = useAppSelector(profileNameSelector)
	const isLoggedIn = useAppSelector(appIsLoggedInSelector)
	const avatarFromServer = useAppSelector(profileAvatarSelector)

	const avatar = avatarFromServer ? avatarFromServer : ava

	if (!isLoggedIn) {
		return <Navigate to={'/login'}/>
	}

	return (
		<>
			<NavLink to={'/packsList'}>-Перейти к карточкам-</NavLink>
			<div className={s.profilePage}>
				<div className={s.profileWrapper}>
					<h2>Мой профиль:</h2>
					<img className={s.avatar} src={avatar} alt={'avatar'}/>
					<InputTypeFile callBack={() => {
					}}/>
					<div>Имя :{userName}</div>
				</div>
			</div>
		</>
	);
};

