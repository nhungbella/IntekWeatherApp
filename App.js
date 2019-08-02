import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  TextInput,
  Picker,
  ImageBackground,
} from 'react-native';

import Constants from 'expo-constants';
import HttpWeather from './components/dataWeather.js'

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typedText: '',
      selectedName: '',
    };
  }

  renderNameCity() {
    let data = require('./citylist.json');
    let nameCity = [];
    for (let item of data) {
      nameCity.push(
        <Picker.Item key={item.id} label={item.name} value={item.name} />
      );
    }
    return nameCity;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Weather App</Text>
        <Text style={styles.statisticsText}>Weather Statistics</Text>

        <View style={styles.button}>
          <View style={styles.facebookLogo}>
            <Image
              style={{ width: 20, height: 20, padding: 10 }}
              source={require('./assets/facebook.png')}
            />
          </View>

          <View style={styles.facebookLogin}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.facebook.com')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: 'center',
                  justifyContent: 'center',
                }}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={styles.inputText}
          placeholder="Input your city"
          placeholderTextColor="gainsboro"
          onChangeText={text => {
            this.setState(previousState => {
              return {
                typedText: text,
              };
            });
          }}
        />

        <View style={styles.listCountry}>
          <Picker
            mode="dropdown"
            style={{ height: 30, width: '80%' }}
            selectedValue={this.state.selectedName}
            onValueChange={value => this.setState({ selectedName: value })}>
            {this.renderNameCity()}
          </Picker>
        </View>
       
        <ImageBackground
          source={require('./assets/sun.png')}
          style={styles.imageWeather}
        />
        <View style={styles.results}> 
        <HttpWeather />
        </View>
        <Text style={styles.showCity}>City: {this.state.selectedName}</Text>
        

       
      </View>
    );
  }
}

// hien du lieu input
// <Text>{this.state.typedText}</Text>

// <View style={{width:'60%',flexDirection: 'row',justifyContent: 'center'}}>
//   <Picker mode="dropdown" style={{ height:20, backgroundColor: 'white',width: '80%'}}>
//     {
//       data.map((item) =>{
//         return(
//         <Picker.Item  label={item.name} value={item.name} key={item.name}/>
//         );
//       })
//     }
//   </Picker>
// </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 30,
  },

  header: {
    width: '100%',
    height: 45,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    paddingTop: 10,
  },

  statisticsText: {
    margin: 10,
    fontSize: 20,
    textAlign: 'center',
  },

  button: {
    flexDirection: 'row',
    backgroundColor: 'slateblue',
    height: 40,
    width: 250,
    borderRadius: 5,
    padding: 5,
  },

  facebookLogo: {
    flex: 8,
    alignSelf: 'center',
    padding: 5,
  },

  facebookLogin: {
    flex: 92,
    alignSelf: 'center',
  },

  inputText: {
    height: 40,
    width: 250,
    borderColor: 'royalblue',
    borderWidth: 1,
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
  },

  listCountry: {
    borderColor: 'gainsboro',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },

  imageWeather: {
    position: 'relative',
    width: 250,
    height: 200,
    margin: 200,
    borderWidth: 1,
  },

  showCity: {
    position: 'absolute',
    marginTop: 440,
    left: 80,
    fontSize: 20,
  },

  results: {
    position: 'absolute', 
    marginTop: 540,
    left: 80,
  },
});
