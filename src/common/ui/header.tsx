import React from 'react';
import s from './Header.module.scss'
import {LogoutButton} from "../../features/auth/logout/LogoutButton";
import {Link, NavLink} from "react-router-dom";

export const Header = () => {
	return (
		<div className={s.header}>
			<h2>Обучение по карточкам</h2>
			<nav>
				<NavLink to={'/login'}>Вход</NavLink>
				<NavLink to={'/profile'}>Мой профиль</NavLink>
				<NavLink to={'/register'}>Регистрация</NavLink>
			</nav>

			<LogoutButton/>
		</div>
	);
};

