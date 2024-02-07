import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
        <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Start</Text>
        <View style={styles.buttonsContainer}>
          <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
          <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 100,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default Home;
