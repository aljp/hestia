import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import PlaceHolderImage from '../../assets/image-placeholder.jpg';

type Props = {
  objectKey: string,
  onChange: CallableFunction,
  currentImage: ImagePickerResponse | undefined,
  style: any
}

const ImageUploader: React.FC<Props> = (props: Props) => {
  const { objectKey, onChange, currentImage, style } = props;

  const handleFileSelect = (): void => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;

      onChange(objectKey, response);
    })
  };

  return (
    <>
      {currentImage && (
        <Image source={{ uri: currentImage.uri }} style={style} />
      )}
      {!currentImage && (
        <TouchableOpacity onPress={handleFileSelect}>
          <Image source={PlaceHolderImage} style={style} />
        </TouchableOpacity>
      )}
    </>
  );
}

export default ImageUploader;
