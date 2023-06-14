import React from 'react';
import {RegisterForm} from "./RegisterForm";
import s from './Register.module.scss'

export const Register = () => {

	return (
		<div className={s.registerPage}>

			<RegisterForm/>
		</div>
	);
};




