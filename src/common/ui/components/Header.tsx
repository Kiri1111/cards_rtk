import React from 'react';
import s from './Header.module.scss'
import {LogoutButton} from "../../../features/auth/logout/LogoutButton";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../app/hooks";
import {appIsLoggedInSelector} from "../../../app/appSelectors";

export const Header = () => {

	const isLoggedIn = useAppSelector(appIsLoggedInSelector)

	return (
		<div className={s.header}>
			<h2>Обучение по карточкам</h2>
			<header>
				<NavLink to={'/'}>-Главная-</NavLink>
				<NavLink to={'/login'}>-Вход-</NavLink>
				<NavLink to={'/profile'}>-Мой профиль-</NavLink>
				<NavLink to={'/register'}>-Регистрация-</NavLink>
			</header>

			{isLoggedIn ? <LogoutButton/> : <NavLink to={'/login'}>-Вход-</NavLink>
			}

		</div>
	);
};

