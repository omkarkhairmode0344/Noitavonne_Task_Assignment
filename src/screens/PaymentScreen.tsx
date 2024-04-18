import React, {useEffect} from 'react';
import {View, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {StripeProvider, useStripe} from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const initializePaymentSheet = async () => {
    try {
      await initPaymentSheet({
        paymentIntentClientSecret: 'YOUR_PAYMENT_INTENT_CLIENT_SECRET',
        merchantDisplayName: 'Your Merchant Name',
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Error initializing payment sheet');
    }
  };

  const handleDonate = async () => {
    try {
      await presentPaymentSheet();
    } catch (error) {
      console.log(error);
      Alert.alert('Error presenting payment sheet');
    }
  };

  return (
    <StripeProvider
      publishableKey="YOUR_PUBLISHABLE_KEY"
      merchantIdentifier="YOUR_MERCHANT_IDENTIFIER">
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.loginCard}>
            <View style={styles.titleContainer}>
              <Text style={styles.headerTitle}>Donate to support us!</Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={handleDonate}>
              <Text style={styles.buttonTextStyle}>Donate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </StripeProvider>
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
    marginTop: 360,
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

export default PaymentScreen;
