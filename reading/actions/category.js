/**
 * Created by tiger on 16/6/29.
 */
import * as types from '../constants/ActionTypes';
import {ToastShort} from '../utils/ToastUtils';
import {request} from '../utils/RequestUtils';
import {WEXIN_ARTICLE_TYPE} from '../constants/Urls';

export function fetchTypes() {
	return dispatch => {
		dispatch(fetchTypeList());

		return request(WEXIN_ARTICLE_TYPE, 'get')
			.then((typeList) => {

				dispatch(receiveTypeList(typeList.showapi_res_body.typeList));

				let errorMessage = typeList.showapi_res_error;
				if (errorMessage && errorMessage !== '') {
					ToastShort(errorMessage);
				}
			})
			.catch((error) => {
				console.log('fetchTypes error : ' + error);
				dispatch(receiveTypeList([]));
				ToastShort('网络错误，请重试');
			});
	}
}

function fetchTypeList() {
	return {
		type: types.FETCH_TYPE_LIST
	}
}

function receiveTypeList(typeList) {
	return {
		type: types.RECEIVE_TYPE_LIST,
		typeList: typeList
	}
}