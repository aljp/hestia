import React from 'react'
import { Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator';

// type ProfileScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'PageIndex'
// >;

type Props = { navigation : any };

const PageIndex: React.FC<Props> = ({ navigation }) => {
  const handleOnPress = (page: string) => () => {
    navigation.navigate(page)
  }

  return (
    ['LandingPage', 'LoginPage', 'LandlordRegister', 'ContractorDashboard', 'ContractorProfile', 'NearbyJobs'].map((page) => (
      <Button title={page} onPress={handleOnPress(page)} key={page}></Button>  
    ))
  )
};

export default PageIndex;