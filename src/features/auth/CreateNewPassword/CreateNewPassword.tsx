import React, {useState} from 'react';
import s from "../recoveryPassword/RecoveryPassword.module.scss";
import {Preloader} from "../../../common/ui/components/Preloader";
import {Navigate, NavLink, useParams} from "react-router-dom";
import style from './CreateNewPassword.module.scss'
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {appErrorSelector, appIsLoadingSelector, appIsLoggedInSelector} from "../../../app/appSelectors";
import {authThunks} from "../authSlice";

export const CreateNewPassword = () => {

	const dispatch = useAppDispatch()
	const [newPassword, setNewPassword] = useState('')
	const isLoading = useAppSelector(appIsLoadingSelector)
	const error = useAppSelector(appErrorSelector)
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
				{error ? <div>oooooo</div> : ''}
				<input onChange={(e => setNewPassword(e.currentTarget.value))} type="password" placeholder={'пароль'}/>
				<h4>Создайте новый пароль, и мы отправим вам дальнейшие инструкции по электронной почте.</h4>
				{isLoading ? <Preloader width={'300'}/> :
					<button onClick={createNewPasswordHandler}>Создать новый пароль.</button>}
				<h4>Вспомнили пароль?</h4>
				<NavLink to={'/login'}>Попробуйте войти</NavLink>

			</div>
		</div>
	);
};

