import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

console.disableYellowBox = true;

export default class Screen1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>Screen 2</Text>
                <TouchableOpacity style={styles.bt} onPress={() => this.props.navigation.pop()}>
                    <Text style={styles.txt}>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9b59b6',
    },
    txt: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: '#fff'
    },
    bt: {
        backgroundColor: '#2980b9',
        padding: 5,
        borderRadius: 10
    }
});