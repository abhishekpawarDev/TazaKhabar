import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Authentication");
        }, 3000);
    
        return () => clearTimeout(timer);
    }, []);
    
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash.jpg")}
        style={styles.fullScreenImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreenImage: {
    width: width, 
    height: height, 
  },
});

export default SplashScreen;
