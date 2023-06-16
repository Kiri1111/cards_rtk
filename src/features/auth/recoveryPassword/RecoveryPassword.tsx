import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {appIsLoadingSelector, appIsLoggedInSelector} from "../../../app/appSelectors";
import {Navigate, NavLink} from "react-router-dom";
import s from './RecoveryPassword.module.scss'
import {Preloader} from "../../../common/ui/components/Preloader";
import {LoginForm} from "../login/LoginForm";
import {authThunks} from "../authSlice";

export const RecoveryPassword = () => {
	const dispatch = useAppDispatch()
	const isLoggedIn = useAppSelector(appIsLoggedInSelector)
	const isLoading = useAppSelector(appIsLoadingSelector)
	const [email, setEmail] = useState('')
	const [vision, setVision] = useState(true)
	const recoveryPasswordHandler = () => {
		dispatch(authThunks.recoveryPassword({email}))
		setVision(false)
	}

	if (isLoggedIn) {
		return <Navigate to={'/profile'}/>
	}

	return (<>
			{vision
				?
				<div className={s.recoveryPasswordPage}>
					<div className={s.form}>
						<h3>Забыли пароль?</h3>
						<input onChange={(e => setEmail(e.currentTarget.value))} type="email" placeholder={'email'}/>
						<h4>Введите адрес электронной почты, и мы вышлем вам дальнейшие инструкции.</h4>
						{isLoading ? <Preloader width={'300'}/> :
							<button onClick={recoveryPasswordHandler}>Отравить инструкцию</button>}
						<h4>Вспомнили пароль?</h4>
						<NavLink to={'/login'}>Попробуйте войти</NavLink>
					</div>
				</div>
				:
				<ForgotPassword email={email}/>
			}


		</>
	);
};

type ForgotPasswordProps = {
	email: string
}

const ForgotPassword: FC<ForgotPasswordProps> = ({email}) => {
	return (
		<div className={s.recoveryPasswordPage}>
			<div className={s.form}>
				<h2>Проверьте почту</h2>
				<h3>{`Мы отправили письмо с инструкциями на адрес ${email} `} </h3>
				<NavLink to={'/login'}>Вернуться ко входу</NavLink>

			</div>
		</div>
	)

}