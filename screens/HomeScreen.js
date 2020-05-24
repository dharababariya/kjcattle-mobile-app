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
      dataFood: [],
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
          dataFood: responseJson.food,
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
              autoplayTimeou={1}>
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
            <FlatList
              data={this.state.dataFood}
              numColumns={2}
              renderItem={({ item }) => this._renderItemFood(item)}
              keyExtractor={(index, item) => index.toString()}
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
        onPress={() => this.setState({selectCate: item.id})}
        style={[styles.divCategories, { backgroundColor: item.color }]}>
        <Image
          style={{ width: 100, height: 80 }}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
        <Text style={{fontWeight: 'bold', fontSize: 22}}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  _renderItemFood(item) {
    let catg = this.state.selectCate;
    if (catg == 0 || catg == item.categorie) {
      return (
        <TouchableOpacity style={styles.divFood}>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{ uri: item.image }}
          />
          <View
            style={{
              height: width / 2 - 20 - 90,
              backgroundColor: 'transparent',
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 22, alignItems: 'center'}}>
          {item.name}
          </Text>
          <Text>Descp Food and Details</Text>
          <Text style={{fontSize: 22, color: 'green'}}>{item.price}</Text>
        </TouchableOpacity>
      );
    }
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
  titleCate: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  divCategories: {
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10
  },
  imageFood: {
    width: ((width/2)-20)-10,
    height: ((width/2)-20)-30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45
  },
  divFood: { 
    width: (width/2)-20,
    padding: 10,
    borderRadius:10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: 'white'
  }
});
