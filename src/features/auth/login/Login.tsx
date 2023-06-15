import React from 'react';
import {LoginForm} from "./LoginForm";
import s from './Login.module.scss'

export const Login = () => {
	return (
		<div className={s.LoginPage}>
			<LoginForm/>
		</div>
	);
};

