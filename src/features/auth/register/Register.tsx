import React from 'react';
import {RegisterForm} from "./RegisterForm";
import s from './Register.module.scss'
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../../app/hooks";
import {appIsLoggedInSelector} from "../../../app/appSelectors";

export const Register = () => {

	const isLoggedIn = useAppSelector(appIsLoggedInSelector)


	if (isLoggedIn) {
		return <Navigate to={'/profile'}/>
	}


	return (
		<div className={s.registerPage}>

			<RegisterForm/>
		</div>
	);
};




