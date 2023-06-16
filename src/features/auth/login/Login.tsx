import React from 'react';
import {LoginForm} from "./LoginForm";
import s from './Login.module.scss'
import {useAppSelector} from "../../../app/hooks";
import {Navigate} from "react-router-dom";
import {appIsLoadingSelector, appIsLoggedInSelector} from "../../../app/appSelectors";
import {Preloader} from "../../../common/ui/components/Preloader";

export const Login = () => {

	const isLoggedIn = useAppSelector(appIsLoggedInSelector)
	const isLoading = useAppSelector(appIsLoadingSelector)
	if (isLoggedIn) {
		return <Navigate to={'/profile'}/>
	}

	return (
		<div>
			{isLoading ? <Preloader width={'300'}/> : <div className={s.LoginPage}>
				<LoginForm/>
			</div>}

		</div>

	);
};

