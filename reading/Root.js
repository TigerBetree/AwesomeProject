///**
// * Created by tiger on 16/6/29.
// */

import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configure-store';

import App from './containers/App';

const store = configureStore();

/**
 * 根控件：
 * 1. 创建store对象（store对象会使用reducer）
 * 2. 使用<Provider/>包裹根控件，并传入store prop
 */

class Root extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<App/>
			</Provider>
		);
	}
}

export default Root;