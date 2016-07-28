/**
 * Created by tiger on 16/6/29.
 */

import React from 'react';
import {
	StyleSheet,
	Dimensions,
	Image,
	InteractionManager
} from 'react-native';

import MainContainer from '../containers/MainContainer';

var {width, height} = Dimensions.get('window');

class Splash extends React.Component {

	componentDidMount() {
		const {navigator} = this.props;
		setTimeout(() => {
			InteractionManager.runAfterInteractions(() => {
				navigator.resetTo({
					component: MainContainer,
					name: 'Main'
				})
			});
		}, 1000);
	}

	render() {
		return (
			<Image
				style={styles.image}
				source={require('../img/splash.png')}/>
		);
	}
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		width: width,
		height: height
	}
});

export default Splash;