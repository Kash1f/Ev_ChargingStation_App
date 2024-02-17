import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "./Utils/Colors";

export default function LoginScreen() {
  return (
    <View style={styles.viewContainer}>
      <Image
        source={require("./../../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("./../../../assets/images/ev-charging.png")}
        style={styles.bgImage}
      />
      <View style={{padding:20}}>
        <Text style={styles.heading}>Your Ultimate EV Charging Station Finder</Text>
        <Text style={styles.desc}>Find EV charging station near you, plan your trip and stuff with one click



        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  logoImage: {
    width: 200,
    height: 100,
    objectFit: "contain",
  },
  bgImage: {
    width:'100%',
    height:240,
    marginTop:20,
    objectFit:'cover'
  },
  heading: {
    fontSize: 25,
    fontFamily:'Outfit-bold',
    textAlign:'center',
    marginTop:20
  },
  desc:{
     fontSize:17,
     fontFamily:'Outfit',
     marginTop:15,
     textAlign:'center',
     color:Colors.GRAY
  }
});
