import React from 'react';
import {LoginForm} from "./LoginForm";
import s from './Login.module.scss'
import {useAppSelector} from "../../../app/hooks";
import {Navigate} from "react-router-dom";

export const Login = () => {

	const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

	if (isLoggedIn) {
		return <Navigate to={'/profile'}/>
	}

	return (
		<div className={s.LoginPage}>
			<LoginForm/>
		</div>
	);
};

