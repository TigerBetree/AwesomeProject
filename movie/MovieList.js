/**
 * Created by tiger on 16/6/20.
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
	Navigator,
	TouchableHighlight,
	ToastAndroid,
} from 'react-native';

var MovieDetail = require('./MovieDetail');

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class MovieList extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			dataSource: new ListView.DataSource({
				//rowHasChanged:(row1, row2) => row1 !== row2
				rowHasChanged(row1, row2){
					return row1 !== row2;
				}
			}),
			loaded: false
		};

		this.showMovieDetail = this.showMovieDetail.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch(REQUEST_URL)
		//.then(response => response.json())
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((responseData) => {
				console.log(responseData);
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
					loaded: true
				});
			})
			.done();
	}

	renderLoadingView() {
		return (
			<View style={styles.container}>
				<Text>Loading movies...</Text>
			</View>
		);
	}

	showMovieDetail(movie) {
		this.props.navigator.push({
			title: movie.title,
			url: movie.links.alternate,
			name: 'MovieDetail',
			component: MovieDetail
		});

		ToastAndroid.show("hello", ToastAndroid.SHORT);
	}

	renderMovie(movie) {
		return (
			<TouchableHighlight
				style={styles.button}
				underlayColor="green"
				onPress={() => this.showMovieDetail(movie)}>
				<View style={styles.container}>
					<Image
						style={styles.thumbnail}
						source={{uri: movie.posters.thumbnail}}/>
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{movie.title}</Text>
						<Text style={styles.year}>{movie.year}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}

	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderMovie.bind(this)}
				style={styles.listView}/>
		);
	}
}

const styles = StyleSheet.create({
	navigator: {
		flex: 1
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	thumbnail: {
		width: 53,
		height: 81,
	},
	rightContainer: {
		flex: 1,
		marginLeft:10,
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		//textAlign: 'center',
	},
	year: {
		//textAlign: 'center',
	},
	listView: {
		paddingTop: 20,
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	button: {
		backgroundColor: 'white',
		padding: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#CDCDCD',
	},
});

export default MovieList;