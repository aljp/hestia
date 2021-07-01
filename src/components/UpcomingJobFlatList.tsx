/**
 * UpcomingJobFlatList is a reusable component to simply list summary details of any UpcomingJob
 */
import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

type Props = {
  upcomingJobsData: any[];
  limit?: number | undefined;
  listItemStyle: object | undefined;
  lastListItemStyle: object | undefined;
  navigation: any;
};

const UpcomingJobFlatList = (props: Props) => {
  const renderUpcomingJobItem = (o: any) => {
    let listItemStyle = props.listItemStyle;
    if (o.index == props.upcomingJobsData.length - 1) {
      listItemStyle = { ...listItemStyle, ...props.lastListItemStyle };
    }
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("UpcomingJobDetail");
        }}
      >
        <View style={listItemStyle}>
          <Text>{o.item.title}</Text>
          <Text>WHEN: {o.item.when.toDateString()}</Text>
          <Text>WHERE: {o.item.where}</Text>
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
      keyExtractor={(item) => item.id}
    />
  );
};

export default UpcomingJobFlatList;
