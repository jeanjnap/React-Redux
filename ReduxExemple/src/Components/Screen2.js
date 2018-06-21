import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { connect } from 'react-redux'

import { setText } from './actions/textAction';

console.disableYellowBox = true;

class Screen2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>Screen 2</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={(txt) => this.props.setText(txt)}
                    value={this.props.text}
                    placeholder="Text"
                    placeholderTextColor="#fff"
                    returnKeyType='next'
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                />

                <TouchableOpacity style={styles.bt} onPress={() => this.props.navigation.pop()}>
                    <Text style={styles.txt}>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => {
    //alert(JSON.stringify(state));

    return (
        {
            text: state.textReducer.text,
        }
    );
};

export default connect(mapStateToProps, { setText })(Screen2);

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
    },
    input: {
        height: 40,
        color: "#fff",
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        margin: 40
    },
});