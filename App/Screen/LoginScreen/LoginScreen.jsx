import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "./Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";


WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress =async() => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }

  }

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
        <Text style={styles.desc}>Find EV charging station near you, plan your trip and stuff with one click </Text>
        <TouchableOpacity style={styles.button}
        onPress={onPress}>
            <Text style={{
              color:Colors.WHITE,
              textAlign:'center',
              fontFamily:'Outfit',
              fontSize:17
            }}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
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
  },
  button:{
    backgroundColor: Colors.PRIMARY,
    padding:16,
    display:'flex',
    borderRadius:99,
    marginTop:40
  }
});
