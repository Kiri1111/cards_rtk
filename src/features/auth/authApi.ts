import {instance} from "../../common/api/commonApi";

export const authApi = {
	register(arg: ArgRegisterType) {
		return instance.post<RegisterResponseType>('auth/register', arg)
	},
	login(arg: ArgLoginType) {
		return instance.post<ProfileType>('auth/login', arg)
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