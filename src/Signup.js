import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import { auth } from './firebase';

const Signup = (props) => {
  const [userName, setUserName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }


  const clearFields = () => {
    setUserName('');
    setMobileNumber('');
    setEmail('');
    setAadharNumber('');
    setPassword('');
  };

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 410 }}>
        <Text
          style={{
            color: 'red',
            fontSize: 42,
            fontWeight: 'bold',
            marginTop: 80,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'yellow',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 30,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 800,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 20,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 24, color: darkGreen, fontWeight: 'bold' }}>
            User Name
          </Text>
          <Field
            placeholder="User Name"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
          <Text style={{ fontSize: 24, color: darkGreen, fontWeight: 'bold' }}>
            Mobile Number
          </Text>
          <Field
            placeholder="Mobile Number"
            keyboardType={'numeric'}
            value={mobileNumber}
            onChangeText={(text) => setMobileNumber(text)}
          />
          <Text style={{ fontSize: 24, color: darkGreen, fontWeight: 'bold' }}>
            Email
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={{ fontSize: 24, color: darkGreen, fontWeight: 'bold' }}>
            Aadhar Number
          </Text>
          <Field
            placeholder="Aadhar No"
            keyboardType={'numeric'}
            value={aadharNumber}
            onChangeText={(text) => setAadharNumber(text)}
          />
          <Text style={{ fontSize: 24, color: darkGreen, fontWeight: 'bold' }}>
            Password
          </Text>
          <Field
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 18,
            }}>
            <Text style={{ color: 'grey', fontSize: 18 }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '78%',
              paddingRight: 18,
            }}>
            <Text style={{ color: 'grey', fontSize: 18 }}>and</Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert(handleSignUp);
              clearFields(); // Clear the text fields after signup
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
