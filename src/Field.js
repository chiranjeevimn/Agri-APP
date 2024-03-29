import React from 'react';
import { TextInput } from 'react-native';
import { darkGreen } from './Constants';

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        height: 40,
        color: darkGreen,
        paddingHorizontal: 10,
        width: '75%',
        marginRight: 10,
        backgroundColor: 'rgb(220, 220, 220)',
        marginVertical: 10,
        fontSize: 18, // Set the font size to 18 pixels
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
};

export default Field;
