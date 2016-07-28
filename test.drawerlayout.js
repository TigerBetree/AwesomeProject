
import React, {
	Component,
} from 'react';

import {
	AppRegistry,
	View,
	Text,
	TextInput,
	DrawerLayoutAndroid
} from 'react-native';

class DrawerLayoutDemo extends Component {
	render(){
		var navigationView = (
			<View style={{flex: 1, backgroundColor: 'blue'}}>
				<Text style={{margin: 10,color:'#fff',fontSize: 15, textAlign: 'center'}}>我是导航功能栏标题</Text>
				<Text style={{marginTop: 10,marginLeft:20,color:'#fff',fontSize: 15, textAlign: 'left'}}>1.功能1</Text>
				<Text style={{marginTop: 10,marginLeft:20,color:'#fff',fontSize: 15, textAlign: 'left'}}>2.功能2</Text>
			</View>
		);
		return (
			<DrawerLayoutAndroid
				drawerWidth={200}
				drawerPosition={DrawerLayoutAndroid.positions.left}
				renderNavigationView={() => navigationView}>
				<View style={{flex: 1, alignItems: 'center'}}>
					<Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>我是主布局内容</Text>
				</View>
			</DrawerLayoutAndroid>
		);
	}
}

AppRegistry.registerComponent("TestDrawerLayout", () => DrawerLayoutDemo);