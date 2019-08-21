import React from 'react';

import {Text, View, StyleSheet, Button, Dimensions } from 'react-native';

export default class Tag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.textBox}>
                    <Text style={styles.text}>
                        {this.props.title}
                    </Text>
                </View>

            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        width: 130,
        height: 40,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#ff5154',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox: {
        padding: 10,
    },
    text: {
        fontSize: 9
    }
})