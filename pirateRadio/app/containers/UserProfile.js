import React from 'react';

import {Text, View, StyleSheet, Button, Dimensions, Image } from 'react-native';
import AboutMeBlurb from '../components/AboutMeBlurb.js';
import OrganizationBlurb from '../components/OrganizationBlurb.js';
import Tag from '../components/Tag.js';
import { ScrollView } from 'react-native-gesture-handler';
import globalStyles from '../GlobalStyle.js'


export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            aboutMe: this.props.aboutMe
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.headerBG}></View>
                <View elevation={2} style={styles.profileBlurb}>
                    <View style={styles.picDiv}>
                        <Image style={styles.staticPicture} source={require('../img/test.png')} />
                    </View>
                    <View style={styles.userNameContainer}>
                        <Text style={styles.userName}>{this.state.name}</Text>
                    </View>
                </View>
                {/* About Me */}
                <View style={styles.aboutMeContainer}>
                    <View style={styles.aboutMeTextContainer}>
                            <Text style={styles.categoryText}>About Me</Text>
                            <View style={styles.aboutMeBlubContainer}>
                                <AboutMeBlurb text={this.state.aboutMe} width={300}/>
                            </View>
                    </View>
                </View>
                {/* Clubs and Orgs */}
                <View style={styles.orgsContainer}>
                    {/* <View style={styles.orgsTextContainer}> */}
                        <Text style={styles.categoryText}>
                            I Can Help With
                        </Text>
                        <ScrollView 
                        style={styles.orgsScrollView}
                        pagingEnabled={true}
                        horizontal={true}>
                        <View style={styles.orgsComponentsContainer}>
                            <OrganizationBlurb title={"Linear Algebra"}/>
                            <OrganizationBlurb title={"CS Internships"}/>
                        </View>
                        </ScrollView>
                </View>
                <View style={styles.orgsContainer}>
                    <View style={styles.orgsTextContainer}>
                        <Text style={styles.categoryText}>
                            I Want Help With
                        </Text>
                        <ScrollView 
                        style={styles.orgsScrollView}
                        pagingEnabled={true}
                        horizontal={true}>
                        <View style={styles.orgsComponentsContainer}>
                            <OrganizationBlurb title={"Writing"}/>
                            <OrganizationBlurb title={"Making Friends"}/>
                        </View>
                        </ScrollView>
                    </View>
                </View>
                {/* Tags */}
                <View style={styles.tagsContainer}>
                    <View style={styles.orgsTextContainer}>
                        <Text style={styles.categoryText}>
                            Tags
                        </Text>
                        <View style={styles.tagsComponentsContainer}>
                            <Tag title={"Spanish"}/>
                            <Tag title={"Computer Science"}/>
                            <Tag title={"Literature"}/>
                            <Tag title={"History"}/>
                            <Tag title={"Politics"}/>
                            <Tag title={"Robotics"}/>
                        </View>            
                    </View>
                </View>
            </View>
        );
    }
}


let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: globalStyles.colors.white,
        //f2f0ee
    },
    headerBG: {
        width: Dimensions.get('window').width,
        height: 300,
        justifyContent: 'center',
        backgroundColor: globalStyles.colors.blue,
        flex: 1,

    },
    profileBlurb: {
        position: 'absolute',
        width: Dimensions.get('window').width -90,
        top: 170,
        height: 200,
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: globalStyles.colors.white,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowRadius: 1.5,
        shadowColor: '#d4d1cd',
        shadowOpacity: 5,
        shadowOffset: {width: 0, height: 6}
    },
    userNameContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName: {
        fontSize: 25,
    },
    aboutMeContainer: {
        marginTop: 100,
        flexDirection: 'column',
    },
    aboutMeTextContainer: {
        //insert additional text 
        // box styling here
    },
    categoryText: {
        flexWrap: 'wrap',
        fontSize: 25,
        color: '#ff5154',
        // 3c17bf
        // ff5154
    },
    aboutMeBlubContainer: {
        marginTop: 8,
    },
    orgsContainer: {
        marginTop: 20,
        // marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orgsScrollView: {
        // width: Dimensions.get('window').width,
        flexDirection: 'row',
    },
    orgsTextContainer: {
        //flexDirection: 'row',
        //insert additional text 
        // box styling here
    },
    orgsComponentsContainer: {
        marginTop: 10,
        marginLeft: 40,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        // marginTop: 8,
    },
    tagsContainer: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'column',
    },
    tagsComponentsContainer: {
        marginTop: 8,
        height: 200,
        width: Dimensions.get('window').width -90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    staticPicture: {
      height: 100,
      width: 100,
      top: -50,
      justifyContent: 'center',
      borderRadius: 50
    },
    picDiv : {
      height: 0,
      position: 'absolute',
      top: 0
    }
})
