import {instance} from "../../common/api/commonApi";

export const packsApi = {
	getPacks() {
		return instance.get('cards/pack')
	}
}