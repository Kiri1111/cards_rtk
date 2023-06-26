import {Navigate, Route, Routes} from "react-router-dom";
import {Header} from "../common/ui/components/Header";
import {Login} from "../features/auth/login/Login";
import {ProfilePage} from "../features/profile/ProfilePage/ProfilePage";
import {Register} from "../features/auth/register/Register";
import s from './App.module.scss'
import {RecoveryPassword} from "../features/auth/recoveryPassword/RecoveryPassword";
import {CreateNewPassword} from "../features/auth/CreateNewPassword/CreateNewPassword";
import {useAppDispatch, useAppSelector} from "./hooks";
import {appIsLoadingSelector} from "./appSelectors";
import {Preloader} from "../common/ui/components/Preloader";
import {PacksList} from "../features/packs/packsList/PacksList";
import {useEffect} from "react";
import {authThunks} from "../features/auth/authSlice";

function App() {

	const isLoading = useAppSelector(appIsLoadingSelector)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(authThunks.me())
	}, [])

	return (
		<div className={s.app}>
			{isLoading && <Preloader width={'60px'}/>}
			<Header/>
			<Routes>
				<Route path={'/*'} element={<Navigate to={'/404'}/>}/>
				<Route path={'/404'} element={<div>not found</div>}/>
				<Route path={'/login'} element={<Login/>}/>
				<Route path={'/profile'} element={<ProfilePage/>}/>
				<Route path={'/packsList'} element={<PacksList/>}/>
				<Route path={'/register'} element={<Register/>}/>
				<Route path={'/recoveryPassword'} element={<RecoveryPassword/>}/>
				<Route path={'/set-new-password/:id'} element={<CreateNewPassword/>}/>
				<Route path={'/'} element={<h1>Добро пожаловать в приложение!!!</h1>}/>
			</Routes>
		</div>
	);
}

export default App;