/**
 * Created by tiger on 16/6/29.
 */

let HOST = 'http://apis.baidu.com/';

export function request(url, method, body) {
	var isOk;

	// TODO ??? Promise
	return new Promise((resolve, reject) => {
		fetch(HOST + url, {
			method: method,
			headers: {
				'apikey': '19ffb04654b0f50d003e0a58abf2c50b'
			},
			body: body
		}).then((response) => {

			if (response.ok) {
				isOk = true;
			} else {
				isOk = false;
			}

			console.log('RequestUtils isOk : ' + isOk);

			return response.json();
		}).then((responseData) => {
			console.log('RequestUtils responseData : ' + responseData);

			console.log('RequestUtils isOk2 : ' + isOk);

			if (isOk) {
				resolve(responseData);
			} else {
				reject(responseData);
			}
		}).catch((error) => {
			console.log("RequestUtils error : " + error);
			reject(error);
		});
	});
}