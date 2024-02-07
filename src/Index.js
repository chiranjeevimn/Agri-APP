import React from 'react';
import { View, StyleSheet, Text, Button, ImageBackground } from 'react-native';

const Index = (props) => {
  return (
    <ImageBackground source={require('./Images/back.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Raitha Krushi Bandu</Text>
        <Text style={styles.text}>
          In This project Soil testing can be done on the spot using an NPK sensor, and the details will be uploaded to the application to get suggestions from agricultural specialists for farmers.
        </Text>
        <Text style={styles.text}>
          Continuous pest control will be done. Farmers can upload the infected part of the plant, and we will apply image processing and machine learning algorithms to identify the disease. It will be posted to the forum for suggestions from agricultural experts.
        </Text>
        <Text style={styles.text}>
          Based on the crop, the farmer can ask for loan help in the forum from bankers. Different bankers who have registered will upload their sanctioned amounts. Farmers can pick the banker based on their needs, and they can contact that bank.
        </Text>
        <Button
          title="Continue to Home"
          onPress={() => props.navigation.navigate("Home")}
          style={styles.button}
          color="red"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'blue',
  },
  button: {
    marginTop: 30,
    backgroundColor: 'yellow',
    color: 'green',
  },
});

export default Index;
