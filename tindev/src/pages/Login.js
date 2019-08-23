import React from 'react';
import {
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import logo from '../assets/logo.png';

export default Login = () => {
  return (
    <KeyboardAvoidingView 
    behavior='padding'
    enabled={Platform.OS === 'ios'}
    style={styles.container}>
        <Image source={logo}></Image>
        <TextInput 
        autoCapitalize='none'
        placeholder='Digite seu nome de usuário'
        placeholderTextColor='#999'
        style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

    </KeyboardAvoidingView>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold'
  }
  
});