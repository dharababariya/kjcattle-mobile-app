import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  Text,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

var { height, width } = Dimensions.get('window');

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataBanner : []
    }
  }

  componentDidMount(){
    const url = 'https://tutofox.com/foodapp/api.json';
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataBanner: responseJson.banner
      })
    }).catch((error) => {
      console.log(error);
    })
  }
  
  render() { 
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>{JSON.stringify(this.state.dataBanner)}</Text> 
      </View>
    );
  }
}
  
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
