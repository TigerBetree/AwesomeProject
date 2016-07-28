/**
 * Created by liuhu on 2016/6/23.
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App';
import appReducer from './reducers';

let store = createStore(appReducer);

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent("InputOutputApp", () => Root);