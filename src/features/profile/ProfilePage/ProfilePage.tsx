import React from 'react';
import {useAppSelector} from "../../../app/hooks";

export const ProfilePage = () => {
	const userName = useAppSelector(state => state.auth.profile.name)
	return (
		<div>
			Мой профиль:
			Имя :{userName}
		</div>
	);
};

