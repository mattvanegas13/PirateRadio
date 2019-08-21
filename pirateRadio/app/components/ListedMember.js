import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default class ListedMember extends React.Component {

    render() {
        return (
                <View style = {styles.container} elevation = {5}>
                    <Image style = {styles.profilePic} source = {this.props.profileSource} />
                    <View style = {{height: 100, width: Dimensions.get('window').width - 50 - 80, display: 'flex', flexDirection: 'column'}}>
                        <View style = {styles.upperTextContainer} >
                            <Text style = {styles.text}>{this.props.name}{"\n"}</Text>
                            <Image style = {styles.star} source = {this.props.starSource} />
                        </View>
                        <View style = {styles.lowerTextContainer} >
                            <Text style = {{fontSize: 18, color: "#8A8A8A"}}>{this.props.position}, {this.props.gradYear}, {this.props.school}{"\n"}</Text>
                        </View>
                    </View>
                    <Image style = {{height: 20, width: 20}} source = {this.props.arrowSource}/>
                </View>
                )
    }
}

const styles = StyleSheet.create({
     profilePic: {
         height: 80,
         width: 80,
         borderRadius: 40,
         alignSelf: 'center'
         },
     upperTextContainer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 0.3,
     },
     lowerTextContainer: {
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 0.7,
     },
     star: {
       height: 20,
       width: 20,
       marginLeft: 5,
     },
     text: {
        fontSize: 20,
     },
     container: {
        width: Dimensions.get('window').width,
        height: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
     }
     })
