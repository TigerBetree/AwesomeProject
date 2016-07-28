/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var MOCKED_MOVIES_DATA = [
    {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

import React, { Component } from 'react';
import {
    Platform,
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    Image,
    View
} from 'react-native';

var Item = require("./item");

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

class AwesomeProject extends Component {
    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        dataSource: new ListView.DataSource({
    //            rowHasChanged: (row1, row2) => row1 !== row2,
    //        }),
    //        loaded: false,
    //    };
    //}
	//
    //componentDidMount() {
    //    console.log(Platform.Version);
	//
    //    this.fetchData();
    //}
	//
    //fetchData() {
    //    fetch(REQUEST_URL)
    //        .then((response) => response.json())
    //        .then((responseData) => {
    //            this.setState({
    //                dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
    //                loaded: true,
    //            });
    //        })
    //        .done();
    //}
	//
    //renderLoadingView() {
    //    return (
    //        <View style={styles.container}>
    //            <Text>
    //                Loading movies...
    //            </Text>
    //        </View>
    //    );
    //}
	//
    //renderMovie(movie) {
    //    return (
    //        <View style={styles.container}>
    //            <Image
    //                source={{uri: movie.posters.thumbnail}}
    //                style={styles.thumbnail}/>
    //            <View style={styles.rightContainer}>
    //                <Text style={styles.title}>{movie.title}</Text>
    //                <Text style={styles.year}>{movie.year}</Text>
    //            </View>
    //        </View>
    //    );
    //}

    render() {
        //var movie = MOCKED_MOVIES_DATA[0];
		//
        //if (!this.state.loaded) {
        //    return this.renderLoadingView();
        //}

        return (
            <View style={styles.container}>
                <Item style={styles.item1}
                      color='#aaa' width='100'
                      height='100' text="Icon"
                      img='https://raw.githubusercontent.com/lizhangqu/androidicons/master/assets/blue_dark/xhdpi/ic_action_achievement.png'/>
                <Item style={styles.item2}
                      color='#aaa' width='100'
                      height='100' text="Icon"
                      img='https://raw.githubusercontent.com/lizhangqu/androidicons/master/assets/blue_dark/xhdpi/ic_action_bike.png'/>
            </View>

            //<ListView
            //    dataSource={this.state.dataSource}
            //    renderRow={this.renderMovie}
            //    style={styles.listView}
            ///>

            // <View style={styles.container}>
            //   <Text style={styles.welcome}>
            //     Welcome to React Native!
            //   </Text>
            //   <Text style={styles.instructions}>
            //     To get started, edit index.android.js
            //   </Text>
            //   <Text style={styles.instructions}>
            //     Shake or press menu button for dev menu
            //   </Text>
            // </View>

            //   <View style={styles.container}>
            //     <Image
            //       source={{uri: movie.posters.thumbnail}}
            //       style={styles.thumbnail}/>
            //       <View style={styles.rightContainer}>
            //           <Text style={styles.title}>{movie.title}</Text>
            //           <Text style={styles.year}>{movie.year}</Text>
            //       </View>
            //   </View>
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#F5FCFF',
    // },
    // welcome: {
    //   fontSize: 50,
    //   textAlign: 'center',
    //   margin: 10,
    // },
    // instructions: {
    //   textAlign: 'center',
    //   color: '#333333',
    //   marginBottom: 5,
    // },

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    },
    item1:{
        marginLeft:100,
    },
    item2:{
        marginLeft:100,
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
