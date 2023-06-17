import {instance} from "../../common/api/commonApi";
import axios from "axios";

export const authApi = {
	register(arg: ArgRegisterType) {
		return instance.post<RegisterResponseType>('auth/register', arg)
	},
	login(arg: ArgLoginType) {
		return instance.post<ProfileType>('auth/login', arg)
	},
	logout() {
		return instance.delete('auth/me')
	},
	recoveryPassword(email: string) {
		return axios.post('https://neko-back.herokuapp.com/2.0/auth/forgot', {
			email, message: `<div style="background-color: lime; padding: 15px">
Перейдите по ссылке, чтобы продолжить восстановление пароля : 
<a href='http://localhost:3000/set-new-password/$token$'>
!!!Ссылка!!!</a>
</div>`
		})
	},
	setNewPassword(password: string, resetPasswordToken: string) {
		return axios.post('https://neko-back.herokuapp.com/2.0/auth/forgot', {password, resetPasswordToken})
	}
}

export type ArgLoginType = {
	email: string,
	password: string
	rememberMe: boolean
}
export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>
//export type _ArgRegisterType = Pick<ArgLoginType, 'password' | 'email'>
export type RegisterResponseType = {
	addedUser: UserType
}
export type UserType = Omit<ProfileType, 'token' | 'tokenDeathTime'>
export type ProfileType = {
	_id: string
	email: string
	rememberMe: boolean
	isAdmin: boolean
	name: string
	verified: boolean
	publicCardPacksCount: number
	created: string
	updated: string
	_v: number
	token: string
	tokenDeathTime: number
}