import { ImagePickerResponse } from "react-native-image-picker"

export class Contractor {
  id?: number;
  profileImage?: ImagePickerResponse | undefined;
  name?: string;
  profession?: string;
  description?: string;
  serviceRange?: string;
  latitude?: number | null;
  longitude?: number | null;
}