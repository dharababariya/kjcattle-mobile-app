import React from 'react';
import {View, Text} from 'react-native';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      module:1,
    };
  }
  render(){
    return(
      <View style={{flex:1}}>
      <Text>Profile</Text>
      </View>      
    )
  }
}

export default Profile;