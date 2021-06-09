import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import { Action } from '../reducer'

type StateType = {
  name?: string,
  phoneNumber?: string,
  email?: string,
  password?: string
}

type Props = {
  navigation: Object,
}

const reducer = (state: StateType, action: Action): StateType => {
  const { type, payload } = action;

  switch (type) {
    case 'phoneNumber':
      if (/^[0-9]*$/.test(payload)) return { ...state, [type]: payload };

      return state;
    default:
      return { ...state, [type]: payload };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 10
  }
})

const LandlordRegister: React.FC<Props> = ({ navigation }) => {
  const initialState: StateType = {
    name: '',
    phoneNumber: '',
    email: '',
    password: ''
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, phoneNumber, email, password } = state;

  const handleOnPress = (): void => {
    navigation.navigate('PageIndex')
  };

  
  return (
    <View style={styles.container}>
      <Input
        placeholder="Full Name"
        value={name}
        onChangeText={(text) => dispatch({ type: 'name', payload: text })}
        autoFocus
      />
      <Input placeholder="Phone number" value={phoneNumber} onChangeText={(text) => dispatch({ type: 'phoneNumber', payload: text })}/>
      <Input placeholder="Email" value={email} onChangeText={(text) => dispatch({ type: 'email', payload: text })}/>
      <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={(text) => dispatch({ type: 'password', payload: text })} />
      <Button onPress={handleOnPress}>
        Register
      </Button>
    </View>
  );
}



export default LandlordRegister;
