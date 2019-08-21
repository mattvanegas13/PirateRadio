import React from 'react';

import {Text, View, StyleSheet, Button, TextInput, Dimensions, Image } from 'react-native';
import globalStyles from '../GlobalStyle.js'

export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDone: false,
            name: this.props.name,
            bio: this.props.bio
        }
    }

    render() {
        return(
            <View style={styles.container}>
              <View style={styles.headerBG}>
                    <Text style={styles.title}>Edit Profile</Text>
              </View>
              <View elevation={2} style={styles.profileBlurb}>
                  <View style={styles.picDiv}>
                      <Image style={styles.staticPicture} source={require('../img/test.png')} />
                  </View>
                  <View style={styles.userNameContainer}>
                      <TextInput
                          style={styles.userName}
                          onChangeText={(name) => this.setState({name})}
                          value={this.state.name}
                      />
                  </View>
              </View>
              <View style={styles.aboutMeContainer}>
                  <View style={styles.aboutMeTextContainer}>
                          <Text style={styles.categoryText}>About Me</Text>
                          <View style={styles.aboutMeBlubContainer}>
                            <TextInput
                                multiline = {true}
                                style={{borderColor: 'transparent', borderWidth: 27}}
                                onChangeText={(bio) => this.setState({bio})}
                                value={this.state.bio}
                            />
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyles.colors.white,
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
        borderColor: 'transparent'
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
    },
    title : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: 30,
      marginTop: 50
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
    },
    aboutMeBlubContainer: {
        marginTop: 8,
        height: 300,
        width: 280,
        backgroundColor: globalStyles.colors.white,
        borderRadius: 10,
        shadowRadius: 10,
        shadowColor: globalStyles.colors.black,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 1,
    },
})
