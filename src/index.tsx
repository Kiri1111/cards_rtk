import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {BrowserRouter, createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import {Register} from "./features/auth/register/Register";
import {Login} from "./features/auth/login/Login";
import {ProfilePage} from "./features/profile/ProfilePage/ProfilePage";
import {Header} from "./common/ui/components/Header";
import {GlobalError} from "./common/ui/components/GlobalError";

// const router = createBrowserRouter([
// 	{
// 		element: <Header/>,
// 		children: [
// 			{
// 				path: '/',
// 				element: <div>Hello, its main page</div>
// 			}, {
// 				path: '/login',
// 				element: <Login/>
// 			}, {
// 				path: '/logout',
// 				element: <div>Hello, its logout page</div>
// 			}, {
// 				path: '/register',
// 				element: <Register/>
// 			}, {
// 				path: '/profile',
// 				element: <ProfilePage/>
// 			}
// 		],
// 	},
// ])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<BrowserRouter>

		<Provider store={store}>
			<GlobalError/>
			<App/>
			{/*<RouterProvider router={router}/>*/}
		</Provider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
