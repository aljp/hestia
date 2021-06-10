import React, { useReducer } from "react";
import { StyleSheet, View, FlatList, ListRenderItem } from "react-native";
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

type IQuoteRequest = {
  id: string;
  title: string;
};

const ContractorDashboard: React.FC<Props> = ({ navigation }) => {
  const renderUpcomingJobItem = (o: any) => {
    let listItemStyle = styles.listItem;
    if (o.index == upcomingJobsData.length - 1) {
      listItemStyle = { ...listItemStyle, ...styles.lastListItem };
    }
    return (
      <View style={listItemStyle}>
        <Text>{o.item.title}</Text>
        <Text>WHEN: {o.item.when}</Text>
        <Text>WHERE: {o.item.where}</Text>
      </View>
    );
  };

  const renderQuoteRequestItem = (o: any) => {
    let listItemStyle = styles.listItem;
    if (o.index == quoteRequestsData.length - 1) {
      listItemStyle = { ...listItemStyle, ...styles.lastListItem };
    }
    return (
      <View style={listItemStyle}>
        <Text>{o.item.title}</Text>
        <View
          style={{
            marginBottom: 4,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Button style={{ width: "40%" }}>Reply</Button>
          <Button style={{ width: "40%" }}>Ignore</Button>
        </View>
      </View>
    );
  };

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
  ];
  const quoteRequestsData: IQuoteRequest[] = [
    {
      id: "1",
      title: "Blocked Toilet",
    },
  ];

  return (
    <View style={styles.container}>
      <Text category="h1">Company Name</Text>
      <View style={styles.sectionHeaderContainer}>
        <View style={styles.sectionHeader}>
          <Text category="h2">Upcoming Jobs</Text>
          <Text style={styles.seeMore} appearance="hint" onPress={() => navigation.navigate('UpcomingJobList')}>
            See more...
          </Text>
        </View>
      </View>
      <View>
        <UpcomingJobFlatList upcomingJobsData={upcomingJobsData} limit={3} navigation={navigation} listItemStyle={styles.listItem} lastListItemStyle={styles.lastListItem}></UpcomingJobFlatList>
      </View>
      <View style={styles.sectionHeaderContainer}>
        <View style={styles.sectionHeader}>
          <Text category="h2">Quote Requests</Text>
          <Text style={styles.seeMore} appearance="hint">
            See more...
          </Text>
        </View>
      </View>
      <View>
        <FlatList
          data={quoteRequestsData}
          renderItem={renderQuoteRequestItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default ContractorDashboard;
