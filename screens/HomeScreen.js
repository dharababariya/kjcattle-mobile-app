import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

var { height, width } = Dimensions.get('window');

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBanner: [],
    };
  }

  componentDidMount() {
    fetch('https://tutofox.com/foodapp/api.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataBanner: responseJson.banner,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ width: width, alignItems: 'center' }}>
            <Image
              resizeMode="contain"
              style={{ height: 60, width: width / 2, margin: 10 }}
              source={{ uri: 'https://tutofox.com/foodapp/foodapp.png' }}
            />
            <Swiper
              style={{ height: width / 2 }}
              showsButtons={false}
              autoplay={true}
              autoplayTimeou={2}>
              {this.state.dataBanner.map(itemmap => {
                return (
                  <Image
                    style={styles.imagebanner}
                    resizeMode="contain"
                    source={{uri: itemmap }}
                  />
                );
              })}
            </Swiper>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  imagebanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
