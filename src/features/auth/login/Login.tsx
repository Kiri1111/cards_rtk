import React from 'react';
import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../authSlice";

export const Login = () => {
	const dispatch = useAppDispatch()
	const loginHandler = () => {
		dispatch(authThunks.login({email: 's,', password: 's', rememberMe: true}))
	}
	return (
		<div>
			<h1>logiiiin page!!!</h1>
			<button onClick={loginHandler}>login</button>
		</div>
	);
};

