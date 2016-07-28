/**
 * Created by tiger on 16/6/29.
 */

import {
	AsyncStorage
} from 'react-native';

export default class MyStorage {
	static get(key){
		return AsyncStorage.getItem(key)
			.then(function(value){
				return JSON.parse(value);
			});
	}

	static save(key, value){
		return AsyncStorage.setItem(key, JSON.stringify(value));
	}

	static update(key, value){
		return get(key).then((item) => {

			// TODO ???
			value = typeof value === 'string' ? value : Object.assign({}, item, value);
			return AsyncStorage.setItem(key, JSON.stringify(value));
		});
	}

	static delete(key){
		return AsyncStorage.removeItem(key);
	}
}