import {instance} from "../../common/api/commonApi";

export const authApi = {
	register(email: string, password: string) {
		return instance.post('auth/register', {email, password})
	}
}
