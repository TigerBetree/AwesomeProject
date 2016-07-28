/**
 * Created by tiger on 16/6/20.
 */

import React, {
	Component
} from 'react';

import {
	View,
	StyleSheet,
	Text,
	WebView,
	BackAndroid,
} from 'react-native';

var TEST_URL = "http://wap.baidu.com";

var canGoBack = false;

class MovieDetail extends Component {
	// 构造
	constructor(props) {
		super(props);

		this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
		this.goBack = this.goBack.bind(this);
	}

	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress', this.goBack);
	}

	componentWillUnMount() {
		BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
	}

	onNavigationStateChange(navState) {
		canGoBack = navState.canGoBack;
		console.log('canGoBack : ' + canGoBack);
	}

	goBack() {
		if (canGoBack) {
			this.refs.webview.goBack();
			return true;
		} else {
			const {navigator} = this.props;
			if (navigator && navigator.getCurrentRoutes().length > 1) {
				navigator.pop();
				return true;
			}
		}

		return false;
	}

	render() {
		const { route } = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.content}>{route.title}</Text>
				<WebView
					ref="webview"
					style={styles.webview}
					source={{uri: TEST_URL}}
					startInLoadingState={true}
					scalesPageToFit={true}
					domStorageEnable={true}
					javaScriptEnable={true}
					onNavigationStateChange={this.onNavigationStateChange}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	content: {
		color: 'green',
		fontSize: 20,
		textAlign: 'center'
	},
	webview: {
		flex: 1
	}
});

module.exports = MovieDetail;