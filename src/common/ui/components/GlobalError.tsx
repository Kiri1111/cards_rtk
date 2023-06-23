import React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {appErrorSelector} from "../../../app/appSelectors";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const GlobalError = () => {

	const error = useAppSelector(appErrorSelector)

	if (error !== null) {
		toast.error(error)
	}

	return (
		<div>
			<ToastContainer
				position="top-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
};

