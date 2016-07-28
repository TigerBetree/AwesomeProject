
import React, {
	Component,
} from 'react';

import {
	AppRegistry,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';

class TestText extends Component {
	render() {
		return (
			<View>
				<Text style={{color:'red'}}>Red</Text>
				<Text style={{color:'green', fontSize:20}}>Green</Text>
				<Text style={{color:'green', fontFamily:'Cochin'}}>Green_Cochin</Text>

				<Text style={{color:'pink',fontWeight:'bold'}}> My Text Four 粉色和加粗。</Text>

				<Text style={{color:'gray',fontStyle:'italic'}}> My Text Five 灰色和斜体。</Text>

				<Text style={{textAlign:'center',fontStyle:'italic'}}> My Text Six 居中和斜体。</Text>

				<Text numberOfLines={1} style={{textAlign:'center',fontStyle:'italic'}}>
					测试行数My Text Six 居中和斜体。My Text Six 居中和斜体。 My Text Six 居中和斜体。
				</Text>

				<Text style={{marginLeft:50,marginTop:50,textAlign:'center',fontStyle:'italic'}}>
					设置文本的间距,居左，居顶部50
				</Text>

				<Text numberOfLines={2} style={{lineHeight:50,textAlign:'center',fontStyle:'italic'}}>
					测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
					测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
				</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('TestText', () => TestText);