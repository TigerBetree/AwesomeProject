/**
 * Created by liuhu on 2016/6/23.
 */

import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

import {connect} from 'react-redux';

import * as action from './actions';

class App extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(text) {
        console.log('inputChange text : ' + text);

        this.props.change(text);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>InputOutput Demo</Text>

                <TextInput
                    style={styles.inputBox}
                    autoFocus={true}
                    multiline={true}
                    placeholder="input something."
                    onChange={(event) => this.inputChange(event.nativeEvent.text)}/>

                <Text style={styles.inputValue}>{this.props.propValue}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: 'red',
        fontSize: 25,
        textAlign: 'center'
    },
    inputBox: {
        marginLeft: 30,
        marginRight: 30,
    },
    inputValue: {
        color: 'green',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 40,
        marginRight: 40,
    }
});

function mapStateToProps(state) {
    return {
        propValue: state.value
    }
}

export default connect(mapStateToProps, action)(App);