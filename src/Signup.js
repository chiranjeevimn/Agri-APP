import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 410}}>
        <Text
          style={{
            color: 'red',
            fontSize: 42,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'yellow',
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 800,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, color: darkGreen, fontWeight: 'bold'}}>User Name</Text>
          <Field placeholder="User Name" />
          <Text style={{fontSize: 18, color: darkGreen, fontWeight: 'bold'}}>Mobile Number</Text>
          <Field placeholder="Mobile Number" keyboardType={'number'} />
          <Text style={{fontSize: 18, color: darkGreen, fontWeight: 'bold'}}>Email</Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Text style={{fontSize: 18, color: darkGreen, fontWeight: 'bold'}}>Aadhar Number</Text>
          <Field placeholder="Aadhar No" keyboardType={'number'} />
          <Text style={{fontSize: 18, color: darkGreen, fontWeight: 'bold'}}>Wet land Acre</Text>
          <Field placeholder="Aadhar No" keyboardType={'number'} />
          <Text style={{fontSize: 18, color: darkGreen, fontWeight: 'bold'}}>Wet Land Survey No</Text>
          <Field placeholder="Aadhar No" keyboardType={'number'} />
          <Text style={{fontSize: 18, color: darkGreen, fontWeight: 'bold'}}>Dry land Acre</Text>
          <Field placeholder="Aadhar No" keyboardType={'number'} />
          <Text style={{fontSize: 18, color: darkGreen, fontWeight: 'bold'}}>Dry Land Survey No</Text>
          <Field placeholder="Aadhar No" keyboardType={'number'} />
          <Text style={{fontSize: 18, color: darkGreen, fontWeight: 'bold'}}>Password</Text>
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 14
            }}>
            <Text style={{color: 'grey', fontSize: 14}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 14}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 14,
            }}>
            <Text style={{color: 'grey', fontSize: 14}}>
              and {" "}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 14}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Account created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
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