import React from 'react';

import {View, Text} from 'react-native';

class Feria extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      module:1,
    };
  }
  render(){
    return(
      <View style={{flex:1}}>
      <Text>Feria</Text>
      </View>      
    )
  }
}

export default Feria;