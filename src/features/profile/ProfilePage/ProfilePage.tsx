import React from 'react';
import {useAppSelector} from "../../../app/hooks";

export const ProfilePage = () => {
	const userName = useAppSelector(state => state.auth.profile.name)
	console.log(userName)
	return (
		<div>
			<h2>Мой профиль:</h2>
			<div>Имя :{userName}</div>
		</div>
	);
};

