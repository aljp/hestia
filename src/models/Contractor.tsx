import { ImagePickerResponse } from "react-native-image-picker"

export type Contractor = {
  id: number | undefined;
  profileImage?: ImagePickerResponse | undefined;
  name: string;
  profession: string;
  description: string;
  serviceRange: string;
  latitude: number | null;
  longitude: number | null;
}