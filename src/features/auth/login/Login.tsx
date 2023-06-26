import React from 'react';
import {LoginForm} from "./LoginForm";
import s from './Login.module.scss'
import {useAppSelector} from "../../../app/hooks";
import {Navigate} from "react-router-dom";
import {appIsLoggedInSelector} from "../../../app/appSelectors";

export const Login = () => {
	const isLoggedIn = useAppSelector(appIsLoggedInSelector)

	if (isLoggedIn) {
		return <Navigate to={'/profile'}/>
	}
	return (
		<div>
			<div className={s.LoginPage}>
				<LoginForm/>
			</div>
		</div>
	);
};

