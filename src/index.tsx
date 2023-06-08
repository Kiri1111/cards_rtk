import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>Hello, its main page</div>
	},
	{
		path: '/login',
		element: <div>Hello, its login page</div>
	}, {
		path: '/logout',
		element: <div>Hello, its logout page</div>
	}, {
		path: '/register',
		element: <div>Hello, its register page</div>
	}, {
		path: '/profile',
		element: <div>Hello, its profile page</div>
	}
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<RouterProvider router={router}/>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
