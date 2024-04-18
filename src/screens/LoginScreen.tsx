import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');

      if (savedUsername === username && savedPassword === password) {
        navigation.navigate('Profile');
      } else {
        Alert.alert('Invalid username or password');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error occurred while fetching user data');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.loginCard}>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Welcome Back!</Text>
          </View>
          <Text style={styles.subHeaderTitle}>Username:</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            style={styles.textInputStyle}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.subHeaderTitle}>Password:</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            style={styles.textInputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerViewStyle}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerTextStyle}>
              Don't Have an Account?{' '}
              <Text style={{color: '#ff5b39'}}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5b39',
    borderTopEndRadius: 280,
  },
  loginContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 180,
    marginHorizontal: 20,
  },
  loginCard: {
    margin: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2f3858',
  },
  subHeaderTitle: {
    color: '#000000',
    fontWeight: '500',
  },
  textInputStyle: {
    backgroundColor: '#f5f6f7',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff5b39',
    height: 45,
    borderRadius: 20,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  registerViewStyle: {
    alignItems: 'center',
    marginTop: 25,
  },
  registerTextStyle: {
    color: '#2f3858',
    fontWeight: '500',
  },
});

export default LoginScreen;
