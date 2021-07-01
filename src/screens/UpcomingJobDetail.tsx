import React, { useReducer } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Datepicker, Input, Text } from "@ui-kitten/components";
import { Action } from "../reducer";
import { Job } from "../models/Job";

type Props = {
  navigation: any;
  edit: boolean;
  upcomingJobId?: string|number;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  sectionHeaderContainer: {
    height: 50,
  },
  sectionHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  seeMore: {
    lineHeight: 30,
    textDecorationLine: "underline",
  },
  listItem: {
    borderTopColor: "grey",
    borderTopWidth: 1,
    paddingLeft: 8,
  },
  lastListItem: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
});

const reducer = (state: Job, action: Action): Job => {
  const { type, payload } = action;
  
  switch (type) {
    case 'title':
      if (/^[\w\W]*$/.test(payload)) return { ...state, [type]: payload };
      return state;
    case 'when':
      return state;
    case 'where':
      if (/^\w*$/.test(payload)) return { ...state, [type]: payload };
      return state;
    default:
      return { ...state, [type]: payload };
  }
}

const UpcomingJobDetail: React.FC<Props> = ({ navigation, edit=true, upcomingJobId }) => {
  const commentsSection = () => (
    <Text>Comments</Text>
  );
  let initialState: Job = {
    id: undefined,
    title: '',
    when: new Date(),
    where: '',
    comments: [],
  };

  if (upcomingJobId !== undefined) {
    initialState = {
      id: 1,
      title: 'Example Job Title',
      when: new Date(),
      where: '',
      comments: [
        'Hi I have some additional information.',
        'I just noticed something else...'
      ]
    }
  }

  const [state, dispatch]:[Job, any] = useReducer(reducer, initialState);
  const job = state;
  return (
    <View style={styles.container}>
      <Text category="h1">Upcoming Job</Text>
      <View style={styles.sectionHeaderContainer}>
        <View style={styles.sectionHeader}>
          <Text category="h4">{job.title}</Text>
        </View>
        <View>
        
        <Input placeholder="Title" label="Title" value={state.title} onChangeText={(text) => dispatch({ type: 'title', payload: text })}/>
        <Datepicker date={job.when} onSelect={nextDate => dispatch({ type: 'when', payload: nextDate})}/>
        <Input placeholder="Where" value={state.where} onChangeText={(text) => dispatch({ type: 'where', payload: text })}/>
        { state.id && state.comments && commentsSection() }
        </View>
      </View>
    </View>
  );
};

export default UpcomingJobDetail;
