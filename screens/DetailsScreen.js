import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var { height, width } = Dimensions.get('window');

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }} />
        <Text style={{ fontSize: 28, color: 'gray', fontWeight: 'bold' }}>
          Cart Food
        </Text>
        <View style={{ height: 10 }} />

        <View style={{ backgroundColor: 'transparent', flex: 1 }}>
          <View style={{ width: width - 20, flexDirection: 'row' }}>
            <Image
              resizeMode={'contain'}
              style={{
                width: width / 3,
                height: width / 3,
              }}
              source={{
                uri: 'http://tutofox.com/foodapp//food/pizza/pizza-1.png',
              }}
            />
            <View style={{ backgroundColor: 'red', flex: 1 }}>
              <Text>Title</Text>
              <Text>Lorem ipsum food</Text>
                <Text>65</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="ios-remove-circle" size={30} color={'white'} />
                  <Text>5</Text>
                  <Icon name="ios-add-circle" size={30} color={'white'} />
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 20 }} />
        <TouchableOpacity
          style={{
            backgroundColor: '#009387',
            width: width - 40,
            alignItems: 'center',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>

        <View style={{ height: 10 }} />
      </View>
    );
  }
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
