/**
 * Created by liuhu on 2016/6/23.
 */

export function change(value) {

    console.log("action change value : " + value);

    return {
        type: 'change',
        value: value
    }
}