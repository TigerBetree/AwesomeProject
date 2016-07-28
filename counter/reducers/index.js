/**
 * Created by liuhu on 2016/6/22.
 */

import {combineReducers} from 'redux';
import counter from './CounterReducer';

const rootReducer = combineReducers({
    counter
});

export default rootReducer;