import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Avatar } from '@ui-kitten/components';
import { Message } from '../models/Message';

const currentUserId = 1

const avatars = [
  null, // id 0 does not exist
  require('../../assets/adam-avatar.jpg'),
  require('../../assets/pragz-profile.jpg'),
]

const InstantMessage = ({ message, received }:{ message: Message, received: boolean }) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      margin: 10,
      flexDirection: received ? 'row-reverse' : 'row'
    },
    content: {
      flex: 3,
      backgroundColor: received ? 'purple' : 'blue',
      color: 'white',
      padding: 10,
      borderRadius: 4,
      alignSelf: 'center'
    },
    avatarWrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: received ? 'row-reverse' : 'row',
      width: '20%',
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Avatar source={avatars[message.authorId]} />
      </View>
      <View style={styles.content}>
        <Text style={{ color: 'white' }}>
          {message.content}
        </Text>
      </View>
    </View>
  );
};

export default InstantMessage;