/**
 * Created by tiger on 16/6/29.
 */

export function NaviGoBack(navigator) {
	if (navigator && navigator.getCurrentRoutes().length > 1) {
		navigator.pop();
		return true;
	}
	return false;
}

export function isEmptyObject(obj) {
	for (var name in obj) {
		return false;
	}
	return true;
}