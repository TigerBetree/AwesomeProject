/**
 * Created by tiger on 16/6/9.
 */
import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,Text,
	ScrollView,
	ToastAndroid,
	TouchableHighlight,
	Alert,
	AppState,
	NetInfo,
	AsyncStorage,
	Dimensions,
	PixelRatio,
	BackAndroid,
	Linking,
} from 'react-native';

var {NativeModules} = require('react-native');

class CustomButton extends Component {
	render() {
		return (
			<TouchableHighlight
				style={styles.button}
				underlayColor="#a5a5a5"
				onPress={this.props.onPress}>
				<Text style={styles.buttonText}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}
}

var backCount = 2;
var url = "http://wap.sogou.com";
var schema = "awesome://test";

class NativeAPIDemo extends Component {
	// 构造
	constructor(props) {
		super(props);
		this._handleAppStateChange = this.handleAppStateChange.bind(this);
		// 初始状态
		this.state = {
			_appState: AppState.currentState
		};
	}

	componentWillMount() {
		AppState.addEventListener('change', this._handleAppStateChange);
	}

	componentWillUnMount() {
		AppState.addEventListener('change', this._handleAppStateChange);
	}

	handleAppStateChange(appState) {
		//ToastAndroid.show("Current AppState : " + appState, ToastAndroid.SHORT);
	}

	componentDidMount() {
		BackAndroid.addEventListener(BackAndroid.DEVICE_BACK_EVENT, function () {
			if (backCount >= 1) {
				ToastAndroid.show('back key.', ToastAndroid.SHORT);
				backCount--;
				return true;
			} else {
				return false;
			}
		});

		NativeModules.IntentModule.dataToJS((msg) => {
				ToastAndroid.show("Intent Data : " + msg, ToastAndroid.SHORT);
			},
			(result) => {
				ToastAndroid.show("Intent Error : " + result, ToastAndroid.SHORT);
			});
	}

	openLink() {
		//Linking.canOpenURL(url).then(support => {
		//	if(support){
		//		Linking.openURL(url);
		//	} else {
		//		console.log('Can not open url : ' + url);
		//	}
		//});

		// test schema
		Linking.canOpenURL(schema).then(support => {
			if (support) {
				Linking.openURL(schema);
			} else {
				console.log('Can not open url : ' + schema);
			}
		});
	}

	render() {
		return (
			<View>
				<Text>Current AppState : {this.state._appState}</Text>
				<Text>Screen Width : {Dimensions.get('window').width}</Text>
				<Text>Screen Height : {Dimensions.get('window').height}</Text>
				<Text>Screen DPI : {PixelRatio.get()}</Text>
				<CustomButton
					text="弹出Alert"
					onPress={() => Alert.alert("提示","测试Alert",
							  [
							  {text:'Cancel', onPress:()=> ToastAndroid.show("Cancel is clicked.", ToastAndroid.SHORT)},
							  {text:'Ok', onPress:()=> ToastAndroid.show("Ok is clicked.", ToastAndroid.SHORT)}
							  ])}/>

				<CustomButton
					text="Open Link"
					onPress={this.openLink}/>

				<CustomButton
					text="点击自定义Toast方法"
					onPress={() => NativeModules.ToastCustomAndroid.show("CustomToastAndroid",
							NativeModules.ToastCustomAndroid.SHORT)}/>

				<CustomButton
					text="点击测试封装方法"
					onPress={() => NativeModules.ToastCustomAndroid.measureLayout(
						(msg) => {ToastAndroid.show(msg, ToastAndroid.SHORT)},
						(x,y,w,h) => {ToastAndroid.show(x + "," + y + "," + w + "," + h, ToastAndroid.SHORT)}
					)}/>

				<CustomButton
					text="点击跳转到TestActivity界面"
					onPress={() => NativeModules.IntentModule.startActivityFromJS("com.awesomeproject.TestActivity", "startActivityFromJS.")}
				/>

				<CustomButton
					text="点击跳转到Activity界面,并且等待数据返回..."
					onPress={
						() => NativeModules.IntentModule.startActivityForResultFromJS("com.awesomeproject.TestActivity", 200,
						(msg) => {
                    		ToastAndroid.show('SetResult Data :' + msg, ToastAndroid.SHORT);
                  		},
                    	(result) => {
                    		ToastAndroid.show('Error : ' + result, ToastAndroid.SHORT);
                  	})}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		margin: 5,
		backgroundColor: 'white',
		padding: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#cdcdcd'
	}
});

AppRegistry.registerComponent("NativeAPIDemo", () => NativeAPIDemo);