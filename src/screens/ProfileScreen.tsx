import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    try {
      const savedName = await AsyncStorage.getItem('name');
      const savedMobile = await AsyncStorage.getItem('mobile');
      const savedAge = await AsyncStorage.getItem('age');
      const savedAadhar = await AsyncStorage.getItem('aadhar');
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedName) setName(savedName);
      if (savedMobile) setName(savedMobile);
      if (savedAge) setName(savedAge);
      if (savedAadhar) setName(savedAadhar);
      if (savedTheme) setTheme(savedTheme);
    } catch (error) {
      console.log(error);
      Alert.alert('Error loading profile data');
    }
  };

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme);
  };

  const handlePaymentNavigation = () => {
    navigation.navigate('Payment');
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.profileCard}>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>
          <Text style={styles.subHeaderTitle}>Full Name:</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your full name"
            style={styles.textInputStyle}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.subHeaderTitle}>Mobile Number:</Text>
          <TextInput
            value={mobile}
            onChangeText={setMobile}
            placeholder="Enter your mobile number"
            style={styles.textInputStyle}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.subHeaderTitle}>Age:</Text>
          <TextInput
            value={age}
            onChangeText={setAge}
            placeholder="Enter your age"
            style={styles.textInputStyle}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.subHeaderTitle}>Aadhar Number:</Text>
          <TextInput
            value={aadhar}
            onChangeText={setAadhar}
            placeholder="Enter your aadhar number"
            style={styles.textInputStyle}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.subHeaderTitle}>Theme:</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleThemeChange}>
            <Text style={styles.buttonTextStyle}>
              {theme === 'light' ? 'Dark' : 'Light'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.subHeaderTitle}>Click below for donation:</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handlePaymentNavigation}>
            <Text style={styles.buttonTextStyle}>Make a Donation</Text>
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
  subContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
  },
  profileCard: {
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
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
export default ProfileScreen;
