import React from 'react';

import {Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import globalStyles from '../GlobalStyle.js'

export default class AboutMeBlurb extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <View elevation={2} style={styles.container}>
                    <View style={styles.textField}>
                        <Text>{this.props.text}</Text>
                    </View>
            </View>
        );
    }
}

let width = 280

let styles = StyleSheet.create({
    container: {
        height: 300,
        width: width,
        backgroundColor: globalStyles.colors.white,
        borderRadius: 10,
        shadowRadius: 10,
        shadowColor: globalStyles.colors.black,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 1,
    },
    textField: {
        padding: 27,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

})