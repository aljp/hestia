import React, { useReducer } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Input, Button, Text as KittenText } from '@ui-kitten/components';
import { ImagePickerResponse } from 'react-native-image-picker';
import ImageUploader from '../components/ImageUploader';
import MapSelector from '../components/MapSelector';

type Props = {
  navigation: any
}

type StateType = {
  profileImage?: ImagePickerResponse | undefined,
  name?: string,
  profession?: string,
  description?: string,
  serviceRange?: string,
  latitude?: number | null,
  longitude?: number | null
}

type Action = {
  type: string,
  payload: StateType
}

const reducer = (state: StateType, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return { ...state, ...payload }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll'
  },
  formContainer: {
    marginBottom: 4,
    height: 340
  },
  saveContainer: {
    flex: 1
  },
  profileImage: {
    width: '100%',
    height: 200
  },
  inputContainer: {
    padding: 4,
  },
  description: {
    width: '100%',
  },
  saveButton: {
    marginBottom: 12,
    marginRight: 12,
    marginLeft: 12
  }
})

const ContractorProfile: React.FC<Props> = ({ navigation }) => {
  const initialState: StateType = {
    profileImage: undefined,
    name: '',
    profession: '',
    description: '',
    serviceRange: '50',
    latitude: -33.8688,
    longitude: 151.2093
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const {
    profileImage,
    name,
    profession,
    description,
    serviceRange,
    latitude,
    longitude
  } = state;


  const handleOnFileSelect= (image: ImagePickerResponse) => {
    dispatch({ type: 'image', payload: { profileImage: image } })
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <ImageUploader
          onChange={handleOnFileSelect}
          objectKey="profileImage"
          currentImage={profileImage}
          style={styles.profileImage}
        />
        <View style={styles.inputContainer}>
          <Input placeholder="Company Name" value={name} onChangeText={(text: string) => dispatch({ type: 'text', payload: { name: text } })} />
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="Profession" value={profession} onChangeText={(text: string) => dispatch({ type: 'text', payload: { profession: text } })} />
        </View>
        <View style={styles.inputContainer}>
          <Input
            multiline={true}
            placeholder="Description"
            value={description}
            style={styles.description}
            onChangeText={(text: string) => dispatch({ type: 'text', payload: { description: text } })}
          />
        </View>
      </View>
      <View>
        <KittenText category="h2">Service area</KittenText>
        <MapSelector longitude={longitude} latitude={latitude} style={styles.profileImage} />
        <View style={styles.inputContainer}>
          <Text>Service range</Text>
          <Input
            placeholder="KM"
            value={serviceRange}
            onChangeText={(text: string) => dispatch({ type: 'number', payload: { serviceRange: text } })} 
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.saveButton}>
        <Button>
          Save
        </Button>
      </View>
    </ScrollView>
  );
};

export default ContractorProfile;
