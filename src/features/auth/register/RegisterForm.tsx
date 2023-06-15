import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../authSlice";
import s from './Register.module.scss'

type Inputs = {
	email: string
	password: string
}

export const RegisterForm = () => {

	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => dispatch(authThunks.register(data))

	return (

		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<div><h1>Регистрация</h1></div>
			<div className={s.input}>
				Почта: <input  {...register("email")}/>
			</div>
			<div className={s.input}>
				Пароль: <input  {...register("password")}/>
			</div>


			<input type="submit"/>
		</form>
	)
}

