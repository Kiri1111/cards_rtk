import React from 'react';
import {RegisterForm} from "./RegisterForm";
import s from './Register.module.scss'
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../../app/hooks";

export const Register = () => {

	const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)


	if (isLoggedIn) {
		return <Navigate to={'/profile'}/>
	}


	return (
		<div className={s.registerPage}>

			<RegisterForm/>
		</div>
	);
};




