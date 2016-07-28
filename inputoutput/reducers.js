/**
 * Created by liuhu on 2016/6/23.
 */

export default function change(state, action) {

    console.log("reducer action.type : " + action.type);

    if (action.type == 'change') {
        return {
            value: action.value
        }
    }

    return {
        value: ''
    }
}