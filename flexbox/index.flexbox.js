/**
 * Created by tiger on 16/6/26.
 */
import React, {
	Component,
} from 'react';

import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	Dimensions,
	PixelRatio,
} from 'react-native';

/**
 * 1. flex属性的取值为整形（大于0），设置了flex属性就代表该元素是可伸缩的
 * 2. flexDirection在React Native中只有两个属性值，row（横向伸缩）和column（纵向伸缩）
 * 3. alignSelf的对齐方式主要有四种：flex-start、flex-end、center、auto、stretch。
 * 4. alignItems是alignSelf的变种，跟alignSelf的功能类似，可用于水平居中。
 * 	  justifyContent用于垂直居中。
 */

class FlexBoxDemo extends Component {
	render() {

		let {width, height} = Dimensions.get('window');

		return (
			<View style={styles.style_0}>
				<View style={[styles.style_1, {flexDirection:'column',
					alignItems:'center', justifyContent:'center'}]}>
					<Text style={{fontSize:20}}>width:{width.toFixed(2)}</Text>
					<Text style={{fontSize:20}}>height:{height.toFixed(2)}</Text>
					<Text style={{fontSize:20}}>PixelRadio:{PixelRatio.get()}</Text>
				</View>
				<View style={[styles.style_1, {flexDirection:"row"}]}>
					<Text style={{marginTop:20, fontSize:25}}>1／4高</Text>
					<Text style={{marginTop:20, fontSize:25}}>1／4高</Text>
				</View>
				<View style={styles.style_2}>
					<Text style={{marginTop:20, fontSize:25, alignSelf:'auto'}}>1／2高</Text>
					<Text style={{marginTop:20, fontSize:25, alignSelf:'flex-start'}}>1／2高</Text>
					<Text style={{marginTop:20, fontSize:25, alignSelf:'center'}}>1／2高</Text>
					<Text style={{marginTop:20, fontSize:25, alignSelf:'flex-end'}}>1／2高</Text>
					<Text style={{marginTop:20, fontSize:25, alignSelf:'stretch'}}>1／2高</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	style_0: {
		flex: 1,
		//flexDirection:'row'
		//alignItems:'center'
	},
	style_1: {
		flex: 1,
		borderWidth: 1,
		borderColor: 'red'
	},
	style_2: {
		flex: 3,
		borderWidth: 1,
		borderColor: 'red'
	}
});

AppRegistry.registerComponent("FlexBoxDemo", () => FlexBoxDemo);