import {Navigate, Route, Routes} from "react-router-dom";
import {Header} from "../common/ui/header";
import {Login} from "../features/auth/login/Login";
import {ProfilePage} from "../features/profile/ProfilePage/ProfilePage";
import {Register} from "../features/auth/register/Register";

function App() {

	<Routes>
		<Route path={'/*'} element={<Navigate to={'/404'}/>}/>
		<Route path={'/404'} element={<div>not found</div>}/>
		<Route path={'/login'} element={<Login/>}/>
		<Route path={'/profile'} element={<ProfilePage/>}/>
		<Route path={'/registration'} element={<Register/>}/>
	</Routes>

	return (
		<div className="App">
			<Header/>
		</div>
	);
}

export default App;