import React, { useReducer } from "react";
import { StyleSheet, View, FlatList, ListRenderItem, ListRenderItemInfo } from "react-native";
import { Input, Button, Text, List, Divider, Layout } from "@ui-kitten/components";
import UpcomingJobFlatList from "../components/UpcomingJobFlatList";
import { Job } from "../models/Job";
import { QuoteRequest } from "../models/QuoteRequest";
import jobs from "../fixtures/jobs";

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

  const renderQuoteRequestItem = (item: ListRenderItemInfo<QuoteRequest>) => {
    let listItemStyle = styles.listItem;
    if (item.index == quoteRequestsData.length - 1) {
      listItemStyle = { ...listItemStyle, ...styles.lastListItem };
    }
    return (
      <Layout>
        <View style={listItemStyle}>
          <Text>{item.item.title}</Text>
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
      </Layout>
    );
  };

  const upcomingJobsData = jobs;
  const quoteRequestsData: QuoteRequest[] = [
    {
      id: 1,
      title: "Blocked Toilet",
    },
  ];
  const quoteRequestKeyExtractor = (quoteRequest: QuoteRequest) : string => {
    if (quoteRequest.id === undefined) {
      return "";
    }
    return quoteRequest.id.toString();
  }

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
          keyExtractor={quoteRequestKeyExtractor}
        />
      </View>
    </View>
  );
};

export default ContractorDashboard;

