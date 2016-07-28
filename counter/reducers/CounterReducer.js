/**
 * Created by liuhu on 2016/6/22.
 */

import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/CounterAction';

const initState = {
    value: 0,
    op: ''
};

export default function counter(state = initState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                value: state.value + 1,
                op: '+'
            };
        case DECREMENT_COUNTER:
            return {
                value: state.value - 1,
                op: '-'
            };
        default:
            return state
    }
}