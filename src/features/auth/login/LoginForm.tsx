import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../authSlice";
import s from './Login.module.scss'
import {NavLink} from "react-router-dom";

type Inputs = {
	email: string
	password: string
	rememberMe: boolean
}

export const LoginForm = () => {

	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => dispatch(authThunks.login(data))

	return (

		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<div><h1>Вход</h1></div>
			<div className={s.input}>
				Почта: <input  {...register("email")}/>
			</div>
			<div className={s.input}>
				Пароль: <input  {...register("password")}/>
			</div>
			<div className={s.input}>
				Запомнить меня:
				<input type={"checkbox"} {...register('rememberMe')}/>
			</div>

			<input type="submit"/>

			<NavLink to={'/recoveryPassword'}>Забыли пароль?</NavLink>

		</form>
	)
}

