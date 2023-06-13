import {instance} from "../../common/api/commonApi";

export const authApi = {
	register(arg: ArgRegisterType) {
		return instance.post<RegisterResponseType>('auth/register', arg)
	},
	login(arg: ArgLoginType) {
		return instance.post('auth/login', arg)
	}
}

// export type ResponseType<D = {}> = {
// 	resultCode: number
// 	messages: Array<string>
// 	fieldsErrors?: Array<string>
// 	data: D
// }

export type ArgRegisterType = {
	email: string,
	password: string

}
export type ArgLoginType = {
	email: string,
	password: string
	rememberMe: boolean
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