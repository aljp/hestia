import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import LandingPage from './src/screens/LandingPage';
import LandlordRegister from './src/screens/LandlordRegister';
import LoginPage from './src/screens/LoginPage';
import PageIndex from './src/screens/PageIndex';
import { RootStackParamList } from './src/navigator';
import ContractorDashboard from './src/screens/ContractorDashboard';
import UpcomingJobList from './src/screens/UpcomingJobList';
import UpcomingJobDetail from './src/screens/UpcomingJobDetail';
import ContractorProfile from './src/screens/ContractorProfile';
import NearbyJobs from './src/screens/NearbyJobs';
import ConversationScreen from './src/screens/ConversationScreen';


export const GlobalContext = createContext({});

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <GlobalContext.Provider value={{}}>
          <NavigationContainer>
            <Navigator>
              <Screen name="PageIndex" component={PageIndex} />
              <Screen name="LandlordRegister" component={LandlordRegister} />
              <Screen name="LandingPage" component={LandingPage} />
              <Screen name="LoginPage" component={LoginPage} />
              <Screen name="ContractorDashboard" component={ContractorDashboard} />
              <Screen name="UpcomingJobList" component={UpcomingJobList} />
              <Screen name="UpcomingJobDetail" component={UpcomingJobDetail} />
              <Screen name="ContractorProfile" component={ContractorProfile} />
              <Screen name="NearbyJobs" component={NearbyJobs} />
              <Screen name="ConversationScreen" component={ConversationScreen} />
            </Navigator>
          </NavigationContainer>
        </GlobalContext.Provider>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
