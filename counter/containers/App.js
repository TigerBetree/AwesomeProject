/**
 * Created by liuhu on 2016/6/22.
 */

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/Counter';

import * as CounterActions  from '../actions/CounterAction';

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)