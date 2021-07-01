import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import jobs from '../fixtures/jobs';
import JobPanel from '../components/NearbyJobs/JobPanel';
import { Job } from '../models/Job';

type Props = {
  navigation: any
}

const stubbedUserLocation = {
  latitude: -33.8688,
  longitude: 151.2093
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  mapView: {
    height: '100%',
    width: '100%'
  }
})

const NearbyJobs: React.FC<Props> = ({
  navigation
}) => {
  const [selectedJob, setSelectedJob] : [Job, any] = useState(jobs[0])

  const handleMarkerSelect = (id: number | undefined) => {
    const newJob = jobs.find((job) => job.id === id)
    setSelectedJob(newJob)
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: stubbedUserLocation.latitude,
          longitude: stubbedUserLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
          {jobs.map(({ location, id }) => (
            <Marker
              key={id}
              coordinate={location}
              onPress={() => { handleMarkerSelect(id) }}
            />
          ))}
      </MapView>
      <JobPanel
        job={selectedJob}
      />
    </View>
  );
};

export default NearbyJobs;