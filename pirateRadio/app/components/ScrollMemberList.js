import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList} from 'react-native';
import ListedMember from "./ListedMember.js"

export default class ScrollMemberList extends React.Component {

  render() {
    return (
      <View>
        <View style = {styles.title}>
          <Text style = {styles.titleText}>Members</Text>
        </View>
        <Image source = {this.props.arrowSource} style = {styles.arrowStyle} />
        <FlatList
          style = {styles.flatListStyle}
          keyExtractor={item => item.profileSource}
          data={this.props.data}
          renderItem={({ item }) => (
              <ListedMember arrowSource = {this.props.memberArrowSource} starSource = {this.props.starSource}
                            profileSource = {{uri: item.profileSource}} name = {item.name} position = {item.position}
                            gradYear = {item.gradYear} school = {item.school}/>
            )}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title : {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    height: Dimensions.get('window').height * 0.15,
    width: Dimensions.get('window').width,
    backgroundColor: '#5270B2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  titleText : {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  arrowStyle :{
    left: 30,
    top: Dimensions.get('window').height * 0.075 - 5,
    height: 20,
    width: 20,
  },
  flatListStyle: {
    top: Dimensions.get('window').height * 0.125,
    margin: 0,
    left:0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.85
  }
})
