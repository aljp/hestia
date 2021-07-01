import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from '@ui-kitten/components';
import PlaceHolderImage from '../../../assets/image-placeholder.jpg';


const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  jobPanel: {
    position: 'absolute',
    bottom: 12,
    left: '10%',
    backgroundColor: 'white',
    height: '14%',
    width: '80%',
    flex: 1,
    flexDirection: 'row',
    elevation: 1,
    shadowColor: 'black',
    opacity: 1
  },
  jobContent: {
    height: '50%'
  },
  jobThumbnail: {
    height: 56,
    width: 128,
    resizeMode: 'stretch',
    overflow: 'hidden',
    flex: 1
  },
  buttonWrapper: {
    width: '90%',
    padding: 12
  },
  textWrapper: {
    padding: 8
  }
})

const JobPanel = ({ job }) => {
  const { location, title, address } = job;

  return (
    <View style={styles.jobPanel}>
      <View>
        <Image source={PlaceHolderImage} style={styles.jobThumbnail} />
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.jobContent}>
          <Text>{title}</Text>
          <Text>In {address}</Text>
        </View>
        <View >
          <Button style={styles.buttonWrapper}>Details</Button>
          
        </View>
      </View>
    </View>
  );
};

export default JobPanel;