import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class HttpWeather extends Component {
  state = {
    data: ''
  }

  componentDidMount = () => {
    // fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=e8e64f2f394529c0fc189e0bcec7251f&q=London,uk', {
    fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=e8e64f2f394529c0fc189e0bcec7251f&id=1563281', {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        data: responseJson.main
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 18}}>
          Temperature: { Math.ceil(this.state.data.temp) } °C
          
        </Text>
        <Text style={{fontSize: 18}}>
          Pressure: { this.state.data.pressure } hPa
        </Text>
        <Text style={{fontSize: 18}}>
          Humidity: { this.state.data.humidity } %
        </Text>
      </View>
    )
  }
}
//  Math.ceil(myNumber)
const styles = StyleSheet.create({
  //  showTemperature: {
  //   position: 'absolute',
  //   marginTop: 540,
  //   left: 80,
  //   fontSize: 18,
  // },

  // showPressure: {
  //   position: 'absolute',
  //   marginTop: 560,
  //   left: 80,
  //   fontSize: 18,
  // },

  // showHumidity: {
  //   position: 'absolute',
  //   marginTop: 580,
  //   left: 80,
  //   fontSize: 18,
  // },
})
export default HttpWeather
