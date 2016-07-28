import React, {
	Component,
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	ScrollView,
	Text
} from 'react-native';

class ScrollViewDemo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={true}
							contentContainerStyle={styles.contentContainer}>
					<Text style={{color:'#FFF',margin:5,fontSize:16,backgroundColor:"blue"}}>
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
						Shake or press menu button for dev menuShake or press menu button for dev menu
					</Text>
				</ScrollView>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		height: 400,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	contentContainer: {
		margin: 10,
		backgroundColor: '#ff0000'
	}
});

AppRegistry.registerComponent("ScrollViewDemo", () => ScrollViewDemo);