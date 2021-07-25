import React, { useReducer, useState, useRef, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, ImageProps, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Layout, Input, Icon } from '@ui-kitten/components';
import { RenderProp } from '@ui-kitten/components/devsupport';
import { Message, AssociatedToType, messageReducer } from '../models/Message'
import InstantMessage from '../components/InstantMessage';
import originalMessages from '../fixtures/messages';

const currentUserId = 1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: '100%',
    justifyContent: 'flex-end'
  },
  chatInput: {
    borderRadius: 20,
  },
  scrollView: {
  },
  scrollViewContainer: {
    flexGrow: 1
  }
})

const ConversationScreen = () => {
  const scrollRef = useRef<FlatList>(null);

  const initialState: () => Message = () => ({
    authorId: currentUserId,
    content: '',
    sentAt: new Date(),
    associatedToId: 1,
    associatedToType: AssociatedToType.Job
  });

  const [messages, setMessages] = useState(originalMessages);

  const [state, dispatch] = useReducer(messageReducer, initialState());

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', scrollBottom)
    return () => { Keyboard.removeListener('keyboardDidShow', scrollBottom)};
  }, []);

  const handleSubmit = () => {
    debugger
    const newMessages = [...messages]
    newMessages.unshift(state)
    dispatch({ type: 'reset', payload: initialState() })
    setMessages(newMessages)
  };

  const sendButton: RenderProp<Partial<ImageProps>> = (props) => (
    <TouchableOpacity onPress={handleSubmit}>
      <Icon {...props} name="paper-plane" size="small" />
    </TouchableOpacity>
  );

  const scrollBottom = () => {
    if (scrollRef.current) scrollRef.current.scrollToIndex({ index: 0, animated: true });
  };

  return (
    <Layout style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={{flex: 1, flexGrow: 1}}>
        <FlatList
          inverted
          style={styles.scrollView} 
          ref={scrollRef} 
          onContentSizeChange={scrollBottom}
          contentContainerStyle={styles.scrollViewContainer}
          data={messages}
          renderItem={({ item: message }:{ item: Message }) => (
            <InstantMessage message={message} received={currentUserId !== message.authorId} />
          )}
          keyExtractor={(item) => item.sentAt.getTime().toString()}
        />
      </KeyboardAvoidingView>
      <View>
        <Input
          value={state.content}
          onChangeText={(text) => { dispatch({ type: 'content', payload: { content: text } }) }}
          onSubmitEditing={handleSubmit}
          onFocus={scrollBottom}
          style={styles.chatInput}
          returnKeyType="send"
          multiline
          textAlignVertical="center"
          accessoryRight={sendButton}
        />
      </View>
    </Layout>
  );
};

export default ConversationScreen;
