/**
 * Created by tiger on 16/6/29.
 */

import React from 'react';
import {
	StyleSheet,
	Navigator,
	StatusBar,
	BackAndroid,
	View,
} from 'react-native';

import Splash from '../pages/Splash';

//import WeChatAndroid from 'react-native-wechat-android';

import {NaviGoBack} from '../utils/CommonUtils';

var _navigator, isRemoved = false;

class App extends React.Component {
	constructor(props) {
		super(props);

		// TODO FIXME 微信分享相关注册
		//WeChatAndroid.registerApp('wxb24c445773822c79');

		this.renderScene = this.renderScene.bind(this);
		this.goBack = this.goBack.bind(this);

		BackAndroid.addEventListener('hardwareBackPress', this.goBack);
	}

	goBack() {
		return NaviGoBack(_navigator);
	}

	renderScene(route, navigator) {
		let Component = route.component;
		_navigator = navigator;

		console.log('App route.name : ' + route.name);

		// TODO FIXME 暂时未发现有什么作用
		//if (route.name === 'WebViewPage') {
		//	BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
		//	isRemoved = true;
		//} else {
		//	if (isRemoved) {
		//		BackAndroid.addEventListener('hardwareBackPress', this.goBack);
		//	}
		//}

		return (
			<Component navigator={navigator} route={route}/>
		);
	}

	configureScene(route, routeStack) {
		return Navigator.SceneConfigs.PushFromRight;
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor='green'
					barStyle="default"/>

				<Navigator
					ref="navigator"
					style={styles.navigator}
					configureScene={this.configureScene}
					renderScene={this.renderScene}
					initialRoute={{
						component: Splash,
						name:'Splash'
					}}
				/>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	container: {
		flex: 1
	},
	navigator: {
		flex: 1
	}
});

export default App;