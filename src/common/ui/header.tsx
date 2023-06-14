import React from 'react';
import s from './Header.module.scss'
import {LogoutButton} from "../../features/auth/logout/LogoutButton";

export const Header = () => {
	return (
		<div className={s.header}>
			<h2>Обучение по карточкам</h2>
			<LogoutButton/>
		</div>
	);
};

