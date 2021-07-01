import { LatLng } from 'react-native-maps';

export type Job = {
  id: number | undefined;
  title: string;
  when: Date;
  where: string;
  comments: string[];
  location: LatLng
}
