/**
 * Created by liuhu on 2016/6/22.
 */
import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

class Counter extends Component {
    render() {

        const {increment, decrement, counter} = this.props;

        return (
            <View style={{flex:1}}>
                <Text style={styles.title}>Counter Demo With Redux</Text>

                <Text style={styles.content}>Clicked: {counter.value} times</Text>
                <Text style={styles.content}>OP: {counter.op}</Text>

                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.buttonLeft}
                        onPress={increment}>
                        <Text style={styles.buttonText}>increment</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.buttonRight}
                        onPress={decrement}>
                        <Text style={styles.buttonText}>decrement</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red'
    },
    content: {
        textAlign: 'center',
        marginTop: 50
    },
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 50
    },
    buttonLeft: {
        marginRight: 50
    },
    buttonRight: {
        marginLeft: 50
    },
    buttonText: {
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.object.isRequired
};

export default Counter