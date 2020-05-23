import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
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
      dataCategories: [],
      selectCate: 0,
    };
  }

  componentDidMount() {
    fetch('https://tutofox.com/foodapp/api.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataBanner: responseJson.banner,
          dataCategories: responseJson.categories,
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
                    source={{ uri: itemmap }}
                  />
                );
              })}
            </Swiper>
          </View>
          <View
            style={{
              width: width,
              borderRadius: 20,
              paddingVertical: 20,
              backgroundColor: 'white',
            }}>
            <Text style={styles.titleCate}>
              Categories{this.state.selectCate}
            </Text>
            <FlatList
              horizontal={true}
              data={this.state.dataCategories}
              renderItem={({ item }) => this._renderItem(item)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <Text>App Delivery</Text>
          <Text>{JSON.stringify(this.state.dataCategories)}</Text>
        </View>
      </ScrollView>
    );
  }
  _renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.divCategories, { backgroundColor: item.color }]}
        onPress={() => this.setState({ selectCate: item.id })}>
        <Image
          style={{ width: 100, height: 80 }}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{item.name}</Text>
      </TouchableOpacity>
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
  divCategories: {
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  titleCate: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
