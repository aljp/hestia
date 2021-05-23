import React from 'react'
import { Text, View, Button } from 'react-native'

const LandingPage = ({ navigation }) => {
  return (
    <View>
      <Text>
        This is the LandingPage haw haw

        <Button
          title="Go to login page"
          onPress={() => navigation.navigate('LoginPage')}
        ></Button>
      </Text>
    </View>
  );
};

export default LandingPage;