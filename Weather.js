import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#373B44", "#4286f4"]
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"]
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"]
  },
  Atmosphere: {
    iconName: "cloud-sync",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Clouds: {
    iconName: "cloud-outline",
    gradient: ["#D7D2CC", "#304352"]
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Sand: {
    iconName: "weather-windy-variant",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Squall: {
    iconName: "weather-windy",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Tornado: {
    iconName: "weather-windy",
    gradient: ["#4DA0B0", "#D39D38"]
  }
};

export default Weather = ({temp, condition, desc}) => {
    return (
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            name={weatherOptions[condition].iconName}
            size={96}
            color="white"
          />
          <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}>{condition}</Text>
          <Text style={styles.subTitle}>
            {desc}
          </Text>
        </View>
      </LinearGradient>
    );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  comdition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    halfContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    temp:{
       fontSize:42,
       color:'white'
    },
    title:{
        color:'white',
        fontSize:44,
        fontWeight:'300',
        marginBottom:10
    },
    subTitle:{
        color:'white',
        fontWeight:'600',
        fontSize:24
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:'flex-start'
    }
});