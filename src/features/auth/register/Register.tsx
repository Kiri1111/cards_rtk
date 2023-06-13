import React from 'react';
import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../authSlice";


export const Register = () => {
	const dispatch = useAppDispatch()
	const registerHandler = () => {
		dispatch(authThunks.register({email: 'sss', password: 'sss'}))
	}
	return (
		<div>
			<h1>Registration</h1>
			<button onClick={registerHandler}>reg</button>
		</div>
	);
};




