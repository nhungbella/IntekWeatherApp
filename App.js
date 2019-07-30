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
const cityData = require("./citylist.json")
const data = {cityData}

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Weather App</Text>
        <Text style={styles.statisticsText}>Weather Statistics</Text>

        <View style={styles.button}>
          <View style={styles.facebookLogo}>
            <Image style={{ width: 20, height: 20, padding: 10}}
                  source = {require('./assets/facebook.png')} />
          </View>

          <View style={styles.facebookLogin}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.facebook.com')}>
            <Text style={{
              color: 'white',
              fontSize: 25,
              textAlign: 'center',
              justifyContent: 'center',
            }}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={styles.inputText}
          placeholder='Input your city'
          placeholderTextColor='gainsboro'
          onChangeText={
            (text) => {
              this.setState(
                (previousState) => {
                  return {
                    typedText: text
                  };
                }
              );
            }
          }
        />

        <View style={styles.listCountry}>
          <Picker
            mode='dropdown'
            selectedValue={this.state.language}
            style={{height: 30, width: '80%'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label='List Country' value='list' />
            <Picker.Item label='Java' value='java' />
            <Picker.Item label='baby' value='js' />
            <Picker.Item label='dakdja' value='jgfdgs' />
            <Picker.Item label='dsafegwe' value='gddgjs' />
            <Picker.Item label='dhfgj' value='jgfds' />
            <Picker.Item label='JavaSjhkucript' value='jsfdfs' />
            <Picker.Item label='JavaSnbhfdcript' value='jsjhy' />
          </Picker>
        </View>
        <ImageBackground source = {require('./assets/sun.png')}
               style={{ width: 250, height: 200, margin: 200, position: 'relative',}} />
        <Text style={styles.result}>Result</Text>
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
    fontSize: 28,
    color: 'white',
    paddingTop: 10,
  },

  statisticsText: {
    margin: 10,
    fontSize: 25,
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
    padding:5,
  },

  facebookLogin: {
    flex: 92,
    alignSelf: 'center',
  },

  inputText: {
    height: 50,
    width: 250,
    borderColor: 'royalblue',
    borderWidth: 1,
    marginTop: 30,
    textAlign: 'center',
    fontSize: 25,
  },

  listCountry: {
    borderColor: 'gainsboro',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 10,
    width: '80%',
  },

  result: {
    borderWidth: 1,
    position: 'absolute',
    marginTop: 500,



  },

});
