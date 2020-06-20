import React from 'react';
import {View, Text} from 'react-native';

class Address extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      module:1,
    };
  }
  render(){
    return(
      <View style={{flex:1}}>
      <Text>Address</Text>
      </View>      
    )
  }
}

export default Address;