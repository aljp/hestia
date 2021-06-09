import React from 'react'
import { Button } from 'react-native'

export const PageIndex = ({ navigation }) => {
  const handleOnPress = (page: string) => () => {
    navigation.navigate(page)
  }

  return (
    ['LandingPage', 'LoginPage', 'LandlordRegister', 'ContractorProfile'].map((page) => (
      <Button title={page} onPress={handleOnPress(page)} key={page}></Button>  
    ))
  )
};

export default PageIndex;