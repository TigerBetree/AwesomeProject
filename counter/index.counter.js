/**
 * Created by liuhu on 2016/6/22.
 */

import React, {
    Component
} from 'react';

import {
    AppRegistry
} from 'react-native';

import {
    Provider
} from 'react-redux';

import App from './containers/App';

import configureStore from './store/ConfigureStore'

const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent("CounterApp", () => Root);