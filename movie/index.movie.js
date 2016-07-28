/**
 * Created by tiger on 16/6/23.
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Navigator,
} from 'react-native';

import MovieList from './MovieList';

//var MovieList = require('./MovieList');

class MovieApp extends Component {

	// 构造
	constructor(props) {
		super(props);

		this.renderScene = this.renderScene.bind(this);
	}

	renderScene(route, navigator) {
		let Component = route.component;

		return <Component navigator={navigator} route={route}/>
	}

	configureScene(route, routeStack) {
		return Navigator.SceneConfigs.PushFromRight;
	}

	render() {
		return (
			<Navigator
				style={styles.navigator}
				renderScene={this.renderScene}
				configureScene={this.configureScene}
				initialRoute={{
					name:'MovieList',
					component: MovieList
				}}
			/>
		);
	}
}

const styles = StyleSheet.create({
	navigator: {
		flex: 1
	}
});

AppRegistry.registerComponent('MovieApp', () => MovieApp);
