/**
 * UpcomingJobFlatList is a reusable component to simply list summary details of any UpcomingJob
 */
import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  FlatListProps,
  ListRenderItem,
  ListRenderItemInfo,
} from "react-native";
import { Job } from "../models/Job";

type Props = {
  upcomingJobsData: any[];
  limit?: number | undefined;
  listItemStyle: object | undefined;
  lastListItemStyle: object | undefined;
  navigation: any;
};

const UpcomingJobFlatList = (props: Props) => {
  const renderUpcomingJobItem = (item: ListRenderItemInfo<Job>) => {
    let listItemStyle = props.listItemStyle;
    if (item.index == props.upcomingJobsData.length - 1) {
      listItemStyle = { ...listItemStyle, ...props.lastListItemStyle };
    }
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("UpcomingJobDetail");
        }}
      >
        <View style={listItemStyle}>
          <Text>{item.item.title}</Text>
          <Text>WHEN: {item.item.when.toDateString()}</Text>
          <Text>WHERE: {item.item.where}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  let upcomingJobsData;
  if (props.limit != undefined) {
    upcomingJobsData = props.upcomingJobsData.slice(
      0,
      Math.min(props.upcomingJobsData.length, props.limit)
    );
  } else {
    upcomingJobsData = props.upcomingJobsData;
  }
  return (
    <FlatList
      data={upcomingJobsData}
      renderItem={renderUpcomingJobItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default UpcomingJobFlatList;
