import {instance} from "../../common/api/commonApi";
import {AxiosResponse} from "axios";
import {ProfileType} from "../auth/authApi";

export const profileApi = {
	changeProfile(arg: ArgChangeProfileAvatarType) {
		return instance.put<AxiosResponse<ProfileType>>('auth/me', arg)
	}
}

export type ArgChangeProfileAvatarType = {
	avatar: string | ArrayBuffer | null
}