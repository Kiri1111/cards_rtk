import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../authSlice";
import s from './Login.module.scss'

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

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
	//dispatch(authThunks.login(data))

	return (

		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<div><h1>Вход</h1></div>
			<div className={s.input}>
				<input  {...register("email")}/>
			</div>
			<div className={s.input}>
				<input  {...register("password")}/>
			</div>
			<div className={s.input}>
				Запомнить:
				<input type={"checkbox"} {...register('rememberMe')}/>
			</div>

			<input type="submit"/>
		</form>
	)
}

