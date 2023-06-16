import {Navigate, Route, Routes} from "react-router-dom";
import {Header} from "../common/ui/components/header";
import {Login} from "../features/auth/login/Login";
import {ProfilePage} from "../features/profile/ProfilePage/ProfilePage";
import {Register} from "../features/auth/register/Register";
import s from './App.module.scss'
import {RecoveryPassword} from "../features/auth/recoveryPassword/RecoveryPassword";

function App() {


	return (
		<div className={s.app}>
			<Header/>
			<Routes>
				<Route path={'/*'} element={<Navigate to={'/404'}/>}/>
				<Route path={'/404'} element={<div>not found</div>}/>
				<Route path={'/login'} element={<Login/>}/>
				<Route path={'/profile'} element={<ProfilePage/>}/>
				<Route path={'/register'} element={<Register/>}/>
				<Route path={'/recoveryPassword'} element={<RecoveryPassword/>}/>
				<Route path={'/'} element={<h1>Добро пожаловать в приложение!!!</h1>}/>
			</Routes>

		</div>
	);
}

export default App;