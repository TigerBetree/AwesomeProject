/**
 * Created by tiger on 16/6/29.
 */
import {
	ToastAndroid,
	AlertIOS,
	Platform,
} from 'react-native';

export function ToastShort(content) {
	if (Platform.OS === 'android') {
		ToastAndroid.show(new String(content), ToastAndroid.SHORT);
	} else {
		AlertIOS.alert(
			'提示',
			content.toString()
		);
	}
}

export function ToastLong(content) {
	if (Platform.OS === 'android') {
		ToastAndroid.show(new String(content), ToastAndroid.LONG);
	} else {
		AlertIOS.alert(
			'提示',
			content.toString()
		);
	}
}