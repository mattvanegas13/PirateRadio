import React from 'react';

import {Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Tag from '../components/Tag.js';


export default class OrganizationBlurb extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View elevation={2} style={styles.container}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>
                        {this.props.title}
                    </Text>
                </View>
                
                <View style={styles.textField}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque.
                    </Text>
                </View>
            </View>
        );
    }
}

let width = 320


// Height of the overall container
// needs to be static, and the amount
// of text shown needs to fit within a
// certain space. 

let styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        marginLeft: 1,
        marginRight: 10,
        height: 550,
        width: width,
        borderRadius: 10,
        borderColor: '#ff5154',
        shadowRadius: 10,
        shadowColor: '#d4d1cd',
        shadowOpacity: 5,
        shadowOffset: {width: 0, height: 3},
        backgroundColor: '#fff',
    },
    titleTextContainer: {
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        paddingTop: 40,
        marginLeft: 30,
    },  
    titleText: {
        marginTop: 20,
        paddingLeft: 24,
        fontSize: 18,
    },
    textField: {
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 27,
        paddingBottom: 27,
        marginBottom: 27,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tagBox: {
        marginTop: 240,
        marginLeft: 20
    }
})