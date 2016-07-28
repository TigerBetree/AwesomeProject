var MOCKED_MOVIES_DATA = [
	{title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

import React, {
	Component,
} from 'react';

import {
	AppRegistry,
	Image,
	StyleSheet,
	ViewPagerAndroid,
	Text,
	View,
	TouchableHighlight,
} from 'react-native';

class TestReact extends Component {
	render() {
		var movie = MOCKED_MOVIES_DATA[0];
		return (
			//<View style={styles.container}>
			//	<Text>{movie.title}</Text>
			//	<Text>{movie.year}</Text>
			//	<Image
			//		source={{uri: movie.posters.thumbnail}}
			//		style={styles.thumbnail}/>
			//</View>

			<View style={{flex:1}}>
				<TouchableHighlight
					underlayColor="rgb(210, 230, 255)"
					activeOpacity={0.5}
					style={{borderRadius:8,padding:6,marginTop:5}}>
					<Text style={{fontSize:16}}>点击我</Text>
				</TouchableHighlight>

				<ViewPagerAndroid
					style={styles.pageStyle}
					initialPage={0}>
					<View style={{backgroundColor:'red'}}>
						<Text>First Page.</Text>
					</View>
					<View style={{backgroundColor:'yellow'}}>
						<Text>Second Page.</Text>
					</View>
				</ViewPagerAndroid>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	thumbnail: {
		width: 53,
		height: 81
	},
	pageStyle: {
		alignItems: 'center',
		padding: 20,
		height: 200
	}
});

AppRegistry.registerComponent('TestReact', () => TestReact);
