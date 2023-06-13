import {instance} from "../../common/api/commonApi";

export const authApi = {
	register(arg: ArgRegisterType) {
		return instance.post<RegisterResponseType>('auth/register', arg)
	}
}

export type ArgRegisterType = {
	email: string,
	password: string
}
export type RegisterResponseType = {
	addedUser: UserType
}
export type UserType = {
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
}