import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const baseWidth = 375;
const baseHeight = 667;

const verticalScale = size => (height / baseHeight) * size;

const horizontalScale = size => (width / baseWidth) * size;

const moderateScale = (size, factor = 0.5) => {
  const newSize = size + (horizontalScale(size) - size) * factor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export {moderateScale, horizontalScale, verticalScale};
