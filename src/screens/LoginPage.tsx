import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginPage = ({ navigation }) => (
  <View>
    <Text>
      I am login page 
      <Button
        title="Go to landing page"
        onPress={() => navigation.navigate('LandingPage')}
      >
      </Button>
    </Text>
  </View>
)

export default LoginPage;