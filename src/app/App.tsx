import {Navigate, Route, Routes} from "react-router-dom";
import {Header} from "../common/ui/components/header";
import {Login} from "../features/auth/login/Login";
import {ProfilePage} from "../features/profile/ProfilePage/ProfilePage";
import {Register} from "../features/auth/register/Register";

function App() {


	return (
		<div className="App">
			<Header/>
			<Routes>
				<Route path={'/*'} element={<Navigate to={'/404'}/>}/>
				<Route path={'/404'} element={<div>not found</div>}/>
				<Route path={'/login'} element={<Login/>}/>
				<Route path={'/profile'} element={<ProfilePage/>}/>
				<Route path={'/register'} element={<Register/>}/>
			</Routes>

		</div>
	);
}

export default App;