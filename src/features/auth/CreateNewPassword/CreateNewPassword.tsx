import React, {useState} from 'react';
import {Navigate, NavLink, useParams} from "react-router-dom";
import style from './CreateNewPassword.module.scss'
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {appIsLoggedInSelector} from "../../../app/appSelectors";
import {authThunks} from "../authSlice";

export const CreateNewPassword = () => {

	const dispatch = useAppDispatch()
	const [newPassword, setNewPassword] = useState('')
	const isLoggedIn = useAppSelector(appIsLoggedInSelector)
	const path = useParams()

	const createNewPasswordHandler = () => {
		if (path.id) {
			dispatch(authThunks.setNewPassword({newPassword, resetPasswordToken: path.id}))
		}
	}

	if (isLoggedIn) {
		return <Navigate to={'/profile'}/>
	}

	return (
		<div className={style.createPasswordPage}>
			<div className={style.form}>
				<h3>Придумайте новый пароль</h3>
				<input onChange={(e => setNewPassword(e.currentTarget.value))} type="password" placeholder={'пароль'}/>
				<h4>Создайте новый пароль, и мы отправим вам дальнейшие инструкции по электронной почте.</h4>
				<button onClick={createNewPasswordHandler}>Создать новый пароль.</button>
				<h4>Вспомнили пароль?</h4>
				<NavLink to={'/login'}>Попробуйте войти</NavLink>

			</div>
		</div>
	);
};

