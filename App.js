import React from 'react';
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Loading from "./Loading";
import Weather from './Weather';

const API_KEY = "7605f83731afc590da33f6236451ab18";
export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(lat, lon) => {
    const {
      data: {
        main: { temp },
        weather: [{ main: condition, description: desc }]
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    this.setState({ isLoading: false, temp, condition, desc });
//  const{data} = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//     );

  //  console.log(data);
    

  }
  getLocation = async() => {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
      }
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({});
      this.getWeather(latitude, longitude)
      // Send to API and get weather info
    } catch (error) {
        Alert.alert("Can't find you.", "So sad.");
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    const {isLoading, temp, condition, desc} = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} desc={desc}/>
    );
  }
}