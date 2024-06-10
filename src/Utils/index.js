import {Alert, PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const imageSelection = isCamera => {
  const options = {
    mediaType: 'photo',
    cameraType: 'back',
    quality: 1,
  };
  if (isCamera) {
    return new Promise((resolve, reject) => {
      launchCamera(options, response => {
        if (response.didCancel) {
          reject('cancelled image capture');
        } else if (response.errorCode) {
          reject(`Image capture error: ${response.errorMessage}`);
        } else {
          resolve(response);
        }
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          reject('cancelled image selection');
        } else if (response.errorCode) {
          reject(`Image select error: ${response.errorMessage}`);
        } else {
          resolve(response);
        }
      });
    });
  }
};
const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs camera permission',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Camera Permission Denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export {imageSelection, requestCameraPermission};
