import React, {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {Navigate, NavLink} from "react-router-dom";
import s from './Profile.module.scss'
import {profileAvatarSelector, profileCardsCountSelector, profileNameSelector} from "../../auth/authSelectors";
import {appIsLoggedInSelector} from "../../../app/appSelectors";
import ava from '../../../common/ui/images/avatar.webp'
import {InputTypeFile} from "../../../common/ui/components/InputFile";
import {authThunks} from "../../auth/authSlice";
import {ChangeName} from "./ChangeName";

export const ProfilePage = () => {

	const dispatch = useAppDispatch()
	const userName = useAppSelector(profileNameSelector)
	const cardsCount = useAppSelector(profileCardsCountSelector)
	const isLoggedIn = useAppSelector(appIsLoggedInSelector)
	const avatarFromServer = useAppSelector(profileAvatarSelector)

	const avatar = avatarFromServer == null ? ava : avatarFromServer

	const changeProfileAvatar = useCallback((avatar: string | ArrayBuffer | null) => {
		dispatch(authThunks.changeProfileAvatar({avatar}))
	}, [avatarFromServer])

	const changeProfileName = useCallback((name: string) => {
		dispatch(authThunks.changeProfileName({name}))
	}, [userName])

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
					<InputTypeFile callBack={changeProfileAvatar}/>
					<ChangeName userName={userName} callBack={changeProfileName}/>
					<div>Количество карточек :{cardsCount}</div>

				</div>
			</div>
		</>
	);
};

