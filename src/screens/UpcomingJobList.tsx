import React, { useReducer } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItem,
  TouchableWithoutFeedback,
} from "react-native";
import { Input, Button, Text, List, Divider } from "@ui-kitten/components";
import UpcomingJobFlatList from "../components/UpcomingJobFlatList";

type Props = {
  navigation: any;
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

type IUpcomingJob = {
  id: string;
  title: string;
  when: string;
  where: string;
};

const UpcomingJobList: React.FC<Props> = ({ navigation }) => {
  const upcomingJobsData: IUpcomingJob[] = [
    {
      id: "1",
      title: "Blocked Toilet",
      when: "Wednesday 29th Feb at 9am",
      where: "123 Fake Street",
    },
    {
      id: "2",
      title: "Blocked Toilet",
      when: "Wednesday 29th Feb at 9am",
      where: "123 Fake Street",
    },
    {
      id: "3",
      title: "Blocked Toilet",
      when: "Wednesday 29th Feb at 9am",
      where: "123 Fake Street",
    },
    {
      id: "4",
      title: "Blocked Toilet",
      when: "Wednesday 29th Feb at 9am",
      where: "123 Fake Street",
    },
    {
      id: "5",
      title: "Blocked Toilet",
      when: "Wednesday 29th Feb at 9am",
      where: "123 Fake Street",
    },
  ];

  return (
    <View style={styles.container}>
      <Text category="h1">Company Name</Text>
      <View style={styles.sectionHeaderContainer}>
        <View style={styles.sectionHeader}>
          <Text category="h2">Upcoming Jobs</Text>
          <Text style={styles.seeMore} appearance="hint">
            See more...
          </Text>
        </View>
      </View>
      <View>
        <UpcomingJobFlatList
          upcomingJobsData={upcomingJobsData}
          navigation={navigation}
          listItemStyle={styles.listItem}
          lastListItemStyle={styles.lastListItem}
        ></UpcomingJobFlatList>
      </View>
    </View>
  );
};

export default UpcomingJobList;
