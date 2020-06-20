import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Food from './Food';
import Cart from './Cart';
import Address from './Address';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons';
var { width } = Dimensions.get('window');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      module: 1,
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.module == 1 ? (
          <Food />
        ) : this.state.module == 2 ? (
          <Cart />
        ) : this.state.module == 3 ? (
          <Address />
        ) : (
          <Profile />
        )}

        <View style={styles.bottomTab}>
          <TouchableOpacity onPress={() => this.setState({ module: 1 })}>
            <View style={styles.itemTab}>
              <Icon
                name="md-restaurant"
                size={30}
                color={this.state.module == 1 ? '#009387' : 'gray'}
              />
              <Text>Food</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ module: 2 })}>
            <View style={styles.itemTab}>
              <Icon
                name="md-basket"
                size={30}
                color={this.state.module == 2 ? '#009387' : 'gray'}
              />
              <Text>Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ module: 3 })}>
            <View style={styles.itemTab}>
              <Icon
                name="md-map"
                size={30}
                color={this.state.module == 3 ? '#009387' : 'gray'}
              />
              <Text>Address</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ module: 4 })}>
            <View style={styles.itemTab}>
              <Icon
                name="ios-contact"
                size={30}
                color={this.state.module == 4 ? '#009387' : 'gray'}
              />
              <Text>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  bottomTab: {
    width: width,
    backgroundColor: 'gray',
    height: 60,
    flexDirection: 'row',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  itemTab: {
    width: width / 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
});
