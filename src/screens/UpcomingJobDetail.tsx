import React, { useReducer } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Datepicker, Input, Text } from "@ui-kitten/components";
import { Action } from "../reducer";

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

type StateType = {
  id?: string,
  title?: string,
  when?: Date,
  where?: string,
  comments?: string[],
}

const reducer = (state: StateType, action: Action): StateType => {
  const { type, payload } = action;
  
  switch (type) {
    case 'title':
      if (/^[0-9]*$/.test(payload)) return { ...state, [type]: payload };
      return state;
    case 'when':
      if (/^[0-9z]*$/.test(payload)) return { ...state, [type]: payload };
      return state;
    case 'where':
      if (/^[0-9]*$/.test(payload)) return { ...state, [type]: payload };
      return state;
    default:
      return { ...state, [type]: payload };
  }
}

type IUpcomingJob = {
  id: string;
  title: string;
  when: string;
  where: string;
};

const UpcomingJobDetail: React.FC<Props> = ({ navigation, edit=true, upcomingJobId }) => {
  const commentsSection = () => (
    <Text>Comments</Text>
  );
  let initialState: StateType = {
    title: '',
    when: new Date(),
    where: '',
    comments: [],
  };

  if (upcomingJobId !== undefined) {
    initialState = {
      title: 'Example Job Title',
      when: new Date(),
      where: '',
      comments: [
        'Hi I have some additional information.',
        'I just noticed something else...'
      ]
    }
  }

  const [state, dispatch]:[StateType, any] = useReducer(reducer, initialState);
  const job = state;
  return (
    <View style={styles.container}>
      <Text category="h1">Upcoming Job</Text>
      <View style={styles.sectionHeaderContainer}>
        <View style={styles.sectionHeader}>
          <Text category="h4">{job.title}</Text>
        </View>
        <View>
        
        <Input placeholder="Title" value={state.title} onChangeText={(text) => dispatch({ type: 'title', payload: text })}/>
        <Datepicker date={job.when} onSelect={nextDate => dispatch({ type: 'when', payload: nextDate})}/>
        <Input placeholder="Where" value={state.where} onChangeText={(text) => dispatch({ type: 'where', payload: text })}/>
        { state.id && state.comments && commentsSection() }
        </View>
      </View>
    </View>
  );
};

export default UpcomingJobDetail;
