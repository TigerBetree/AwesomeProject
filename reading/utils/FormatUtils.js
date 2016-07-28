/**
 * Created by tiger on 16/6/29.
 */
export function formatDateString(timestamp){
	var date = new Date(parseInt(timestamp) * 1000);
	var year = date.getFullYear();
	var month = parseInt(date.getMonth()) + 1;
	var day = date.getDate();
	return year + '-' + month + '-' + day;
}