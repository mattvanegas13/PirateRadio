import React from 'react';

import {Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <View style={homePageStyles.overallContainer}>
                <View style={homePageStyles.header}>
                    <View style={homePageStyles.headerTextContainer}>
                        <Text>L</Text>
                        <View style={homePageStyles.titleTextBox}>
                            
                            <Text style={homePageStyles.titleText}>
                            Connect@CU
                            </Text>
                        </View>
                        <Text>R</Text>
                    
                    </View>
                </View>

                {/* Groups */}
                <View style={homePageStyles.groupsContainer}>
                    <View style={homePageStyles.groupTextHeader}>
                        <Text style={homePageStyles.categoryTitle}>Your Groups</Text>
                        <Text>Expand</Text>
                    </View>
                    {/* Insert Group View Here */}
                    <View style={homePageStyles.place_holder_groups}>
                        <Text>Your Groups</Text>
                    </View>
                </View>

                {/* Starred Profiles */}
                <View style={homePageStyles.starredProfilesContainer}>
                    <View style={homePageStyles.sProfileHeader}>
                        <Text style={homePageStyles.categoryTitle}>Starred Profiles</Text>
                        <Text>Expand</Text>
                    </View>

                    <View style={homePageStyles.place_holder_groups}>
                        <Text>Starred Profiles</Text>
                    </View>



                </View>



            </View>
        );
    }
}



let homePageStyles = StyleSheet.create({
    overallContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 110,
        // top: 200,
        backgroundColor: '#fff',
        shadowRadius: 1.5,
        shadowColor: '#d4d1cd',
        shadowOpacity: 5,
        shadowOffset: {width: 0, height: 2}
        // #bbdfed
        
    },
    headerTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 60,
        marginBottom: 10,
    },
    titleTextBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    titleText: {
        fontSize: 20,
        color: '#f05c45',
    },
    categoryTitle: {
        color: '#f05c45'
    },  
    groupsContainer: {
        marginTop: 30,
    },
    groupTextHeader: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
    },
    place_holder_groups: {
        flex: 1,
        height: 400,
        backgroundColor: '#ffd',
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#bbdfed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    starredProfilesContainer: {
        marginTop: 30,
    },
    sProfileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
    }

})